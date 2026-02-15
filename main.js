document.addEventListener('DOMContentLoaded', () => {
    
    // Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});

// ==========================================
// 1. CARGAR CATÁLOGO (SILLAS, COMEDORES, ETC)
// ==========================================
async function cargarCatalogoDinamico() {
    const configuracionPaginas = [
        { id: 'contenedor-sillas', categoria: 'Sillas' },
        { id: 'contenedor-comedores', categoria: 'Comedores' },
        { id: 'contenedor-credenzas', categoria: 'Credenzas' },
        { id: 'contenedor-escritorios', categoria: 'Escritorios' },
        { id: 'contenedor-muebles-tv', categoria: 'Muebles TV' },
        { id: 'contenedor-cantinas', categoria: 'Cantinas' },
        { id: 'contenedor-cabeceras', categoria: 'Cabeceras' }
    ];

    for (let config of configuracionPaginas) {
        const contenedor = document.getElementById(config.id);
        
        if (contenedor) {
            const { data: muebles, error } = await supabaseClient
                .from('inventario_muebles')
                .select('*')
                .eq('categoria', config.categoria);

            contenedor.innerHTML = ''; 

            if (muebles && muebles.length > 0) {
                muebles.forEach(mueble => {
                    
                    // --- CÁLCULO DE OFERTA PARA LAS TARJETAS ---
                    let htmlPrecio = `<p class="price">$${Number(mueble.precio).toLocaleString('es-MX')} MXN</p>`;
                    let htmlBadge = '';

                    // Si existe un precio de rebaja y es menor al precio normal:
                    if(mueble.precio_rebaja && mueble.precio_rebaja < mueble.precio) {
                        const descuento = Math.round(((mueble.precio - mueble.precio_rebaja) / mueble.precio) * 100);
                        
                        // Etiqueta flotante roja
                        htmlBadge = `<span style="position:absolute; top:10px; right:10px; background:#e74c3c; color:white; padding:5px 10px; border-radius:4px; font-weight:bold; font-size:12px; z-index:2; box-shadow:0 2px 5px rgba(0,0,0,0.2);">-${descuento}% OFF</span>`;
                        
                        // Precios (Tachado en gris y nuevo en rojo)
                        htmlPrecio = `
                            <p class="price" style="margin:0;">
                                <span style="text-decoration:line-through; color:#aaa; font-size:13px; margin-right:5px; font-weight:normal;">$${Number(mueble.precio).toLocaleString('es-MX')}</span>
                                <span style="color:#e74c3c; font-weight:bold;">$${Number(mueble.precio_rebaja).toLocaleString('es-MX')} MXN</span>
                            </p>
                        `;
                    }

                    // Inyectamos el diseño en la página
                    contenedor.innerHTML += `
                        <div class="product-card" style="position:relative;">
                            ${htmlBadge}
                            <a href="producto-detalle.html?id=${mueble.identificador}">
                                <div class="product-image">
                                    <img src="${mueble.imagen_url}" alt="${mueble.titulo}">
                                </div>
                                <div class="product-info">
                                    <h3>${mueble.titulo}</h3>
                                    ${htmlPrecio}
                                </div>
                            </a>
                        </div>
                    `;
                });
            } else {
                contenedor.innerHTML = '<p style="text-align:center; width:100%;">Aún no hay productos en esta categoría.</p>';
            }
            break; 
        }
    }
}

// ==========================================
// 2. CARGAR DETALLE DEL PRODUCTO (AL HACER CLIC)
// ==========================================
async function cargarDetalleProducto() {
    const params = new URLSearchParams(window.location.search);
    const identificadorUrl = params.get('id');

    if (!identificadorUrl) return; 

    const { data: producto, error } = await supabaseClient
        .from('inventario_muebles')
        .select('*')
        .eq('identificador', identificadorUrl)
        .single();

    if (error || !producto) {
        document.getElementById('detalle-titulo').innerText = "Producto no encontrado.";
        return;
    }

    document.getElementById('detalle-titulo').innerText = producto.titulo;
    document.getElementById('detalle-precio').innerText = `$${Number(producto.precio).toLocaleString('es-MX')} MXN`;
    document.getElementById('detalle-descripcion').innerText = producto.descripcion || 'Sin descripción disponible.';
    document.getElementById('detalle-material').innerText = producto.material || 'N/A';
    document.getElementById('detalle-acabado').innerText = producto.acabado || 'N/A';
    document.getElementById('detalle-medidas').innerText = producto.medidas || 'N/A';

    const imgPrincipal = document.getElementById('imagen-principal');
    if(imgPrincipal) imgPrincipal.src = producto.imagen_url;

    const contenedorGaleria = document.getElementById('contenedor-galeria');
    if (contenedorGaleria) {
        contenedorGaleria.innerHTML = ''; 
        if (producto.galeria && producto.galeria.length > 0) {
            contenedorGaleria.innerHTML += `<img src="${producto.imagen_url}" width="80" height="80" style="cursor:pointer; object-fit:cover; border-radius:5px; border: 1px solid #ccc;" onclick="cambiarImagenPrincipal(this.src)">`;
            producto.galeria.forEach(imgUrl => {
                contenedorGaleria.innerHTML += `<img src="${imgUrl}" width="80" height="80" style="cursor:pointer; object-fit:cover; border-radius:5px; border: 1px solid #ccc;" onclick="cambiarImagenPrincipal(this.src)">`;
            });
        }
    }
    // ... [Aquí termina el código que carga la galería de fotos] ...

    // === NUEVO: CONFIGURAR BOTÓN DE WHATSAPP ===
    
} // <-- Esta es la llave que cierra la función cargarDetalleProducto()


function cambiarImagenPrincipal(nuevaUrl) {
    document.getElementById('imagen-principal').src = nuevaUrl;
}

// ==========================================
// 3. INICIALIZAR TODO AL CARGAR LA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Intenta cargar el catálogo dinámico (si estamos en sillas, comedores, etc)
    cargarCatalogoDinamico();
    
    // 2. Si detecta que estamos en la página de detalles, carga la información individual
    if (window.location.pathname.includes('producto-detalle.html')) {
        cargarDetalleProducto();
    }
});

// ==========================================
// NUEVO BUSCADOR CONECTADO A SUPABASE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
   // ==========================================
// NUEVO BUSCADOR Y DETALLE A PRUEBA DE FALLOS
// ==========================================
setTimeout(() => { // Lo retrasamos 1 milisegundo para que cargue aislado del código viejo
    try {
        // --- 1. LÓGICA DE LA LUPA ---
        const searchBtn = document.getElementById('search-btn');
        const searchPanel = document.getElementById('search-panel');
        const closeSearch = document.getElementById('close-search');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results-container');

        if(searchBtn && searchPanel) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchPanel.classList.add('active');
                if(searchInput) setTimeout(() => searchInput.focus(), 300);
            });
        }
        if(closeSearch && searchPanel) {
            closeSearch.addEventListener('click', () => {
                searchPanel.classList.remove('active');
                if(searchInput) searchInput.value = '';
                if(searchResults) searchResults.innerHTML = '';
            });
        }
        // ... (Tu código de abrir y cerrar buscador se queda igual) ...
        
        // --- 1B. LÓGICA DE BUSCAR Y DIBUJAR TARJETAS (CON DESCUENTOS) ---
        if(searchInput && searchResults) {
            searchInput.addEventListener('input', async (e) => {
                const texto = e.target.value.toLowerCase().trim();
                if(texto.length < 2) { searchResults.innerHTML = ''; return; }
                
                searchResults.innerHTML = '<p style="text-align:center; width:100%; grid-column: 1/-1;">Buscando...</p>';
                
                const { data, error } = await supabaseClient.from('inventario_muebles').select('*').ilike('titulo', `%${texto}%`);
                searchResults.innerHTML = '';
                if(error || !data || data.length === 0) {
                    searchResults.innerHTML = '<p style="text-align:center; width:100%; grid-column: 1/-1;">No hay resultados.</p>'; return;
                }
                
                data.forEach(m => {
                    // CÁLCULO DE DESCUENTO PARA TARJETA
                    let htmlPrecio = `<p style="margin:0; color:#b58b00; font-weight:bold;">$${Number(m.precio).toLocaleString('es-MX')} MXN</p>`;
                    let htmlBadge = '';

                    if(m.precio_rebaja && m.precio_rebaja < m.precio) {
                        const descuento = Math.round(((m.precio - m.precio_rebaja) / m.precio) * 100);
                        htmlBadge = `<span style="position:absolute; top:10px; right:10px; background:#e74c3c; color:white; padding:4px 8px; border-radius:4px; font-weight:bold; font-size:12px; z-index:2; box-shadow:0 2px 5px rgba(0,0,0,0.2);">-${descuento}%</span>`;
                        htmlPrecio = `
                            <p style="margin:0;">
                                <span style="text-decoration:line-through; color:#aaa; font-size:12px; margin-right:5px;">$${Number(m.precio).toLocaleString('es-MX')}</span>
                                <span style="color:#e74c3c; font-weight:bold;">$${Number(m.precio_rebaja).toLocaleString('es-MX')} MXN</span>
                            </p>
                        `;
                    }

                    searchResults.innerHTML += `
                        <div class="product-card" style="background:#fff; border-radius:8px; overflow:hidden; border:1px solid #eee; position:relative;">
                            ${htmlBadge}
                            <a href="producto-detalle.html?id=${m.identificador}">
                                <img src="${m.imagen_url}" style="width:100%; height:180px; object-fit:cover;">
                                <div style="padding:15px;">
                                    <h4 style="margin:0 0 5px; font-size:15px; color:#333;">${m.titulo}</h4>
                                    ${htmlPrecio}
                                </div>
                            </a>
                        </div>`;
                });
            });
        }

        // --- 2. LÓGICA DEL DISEÑO PREMIUM (DETALLE CON DESCUENTO) ---
        if (window.location.pathname.includes('producto-detalle.html')) {
            const params = new URLSearchParams(window.location.search);
            const idUrl = params.get('id');
            if(!idUrl) return;

            supabaseClient.from('inventario_muebles').select('*').eq('identificador', idUrl).single().then(({data: p, error}) => {
                if(error || !p) { document.getElementById('detalle-titulo').innerText = "Producto no encontrado."; return; }

                console.log("Llamando a relacionados para:", p.categoria);
                cargarRelacionados(p.categoria, p.id);

                document.getElementById('detalle-titulo').innerText = p.titulo;
                document.getElementById('detalle-categoria').innerText = p.categoria;
                document.getElementById('detalle-descripcion').innerText = p.descripcion || 'Sin descripción.';
                document.getElementById('detalle-material').innerText = p.material || 'N/A';
                document.getElementById('detalle-acabado').innerText = p.acabado || 'N/A';
                document.getElementById('detalle-medidas').innerText = p.medidas || 'N/A';
                
                // CÁLCULO DE DESCUENTO PARA VISTA DETALLE
                if(p.precio_rebaja && p.precio_rebaja < p.precio) {
                    const descuento = Math.round(((p.precio - p.precio_rebaja) / p.precio) * 100);
                    document.getElementById('detalle-precio').innerHTML = `
                        <span style="text-decoration:line-through; color:#aaa; font-size:18px; margin-right:10px;">$${Number(p.precio).toLocaleString('es-MX')}</span>
                        <span style="color:#e74c3c; font-weight:bold;">$${Number(p.precio_rebaja).toLocaleString('es-MX')} MXN</span>
                        <span style="background:#e74c3c; color:white; padding:3px 8px; border-radius:12px; font-size:14px; margin-left:10px; vertical-align:middle; display:inline-block;">-${descuento}% OFF</span>
                    `;
                } else {
                    document.getElementById('detalle-precio').innerText = `$${Number(p.precio).toLocaleString('es-MX')} MXN`;
                }
                
                const imgPrin = document.getElementById('imagen-principal');
                imgPrin.src = p.imagen_url;

                // (El resto de tu código de la galería y whatsapp se queda exactamente igual) ...

                // === NUEVA LÓGICA DE GALERÍA ORDENADA ===
                window.galeriaActual = [p.imagen_url]; // Metemos la principal de primero
                if(p.galeria && p.galeria.length > 0) {
                    window.galeriaActual = window.galeriaActual.concat(p.galeria); // Sumamos el resto
                }
                window.indiceFoto = 0; // Empezamos en la foto 0

                // Si hay más de 1 foto, mostramos las flechas
                if(window.galeriaActual.length > 1) {
                    document.getElementById('btn-prev').style.display = 'flex';
                    document.getElementById('btn-next').style.display = 'flex';
                }

                // Generar miniaturas sabiendo su número de índice
                const galeria = document.getElementById('contenedor-galeria');
                galeria.innerHTML = `<img src="${p.imagen_url}" class="thumb-activa" onclick="cambiarFoto(this, '${p.imagen_url}', 0)">`;
                
                if(p.galeria) {
                    p.galeria.forEach((url, index) => {
                        galeria.innerHTML += `<img src="${url}" onclick="cambiarFoto(this, '${url}', ${index + 1})">`;
                    });
                }

                // Configurar WhatsApp

                let precioParaWhatsapp = p.precio; // Por defecto el normal

            if (p.precio_rebaja && p.precio_rebaja < p.precio) {
                 precioParaWhatsapp = p.precio_rebaja; // Si hay oferta, usamos la oferta
                }

                document.getElementById('btn-whatsapp').onclick = () => {
    const numero = "524794084824"; // Tu número real
    const precioFormateado = Number(precioParaWhatsapp).toLocaleString('es-MX');
    
    // El mensaje ahora dirá el precio de oferta si existe
    const etiquetaOferta = (p.precio_rebaja) ? " (Precio de Oferta 🔥)" : "";
    const msj = `Hola, me interesa: *${p.titulo}*${etiquetaOferta}.\nPrecio: $${precioFormateado} MXN.\nLink: ${window.location.href}`;
    
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msj)}`, '_blank');
};
            });
        }
    } catch (e) { console.error("Error protegido en lupa/detalle:", e); }
}, 1);


// FUNCIÓN PARA BUSCAR OTROS MUEBLES DE LA MISMA CATEGORÍA
async function cargarRelacionados(categoria, idActual) {
    const contenedor = document.getElementById('contenedor-relacionados');
    if(!contenedor) return;
    contenedor.innerHTML = '';

    const { data: recomendados, error } = await supabaseClient
        .from('inventario_muebles')
        .select('*')
        .eq('categoria', categoria)
        .neq('id', idActual)
        .limit(3);

    if (recomendados && recomendados.length > 0) {
        recomendados.forEach(m => {
            let precioHTML = `<p class="price" style="margin:0; font-size:14px; color:#333;">$${Number(m.precio).toLocaleString('es-MX')} MXN</p>`;
            let badgeHTML = '';

            if(m.precio_rebaja && m.precio_rebaja < m.precio) {
                const descuento = Math.round(((m.precio - m.precio_rebaja) / m.precio) * 100);
                badgeHTML = `<span style="position:absolute; top:12px; left:12px; background:#e74c3c; color:white; padding:4px 10px; border-radius:4px; font-weight:bold; font-size:11px; z-index:2;">-${descuento}% OFF</span>`;
                precioHTML = `
                    <p class="price" style="margin:0; font-size:14px;">
                        <span style="text-decoration:line-through; color:#aaa; margin-right:5px;">$${Number(m.precio).toLocaleString('es-MX')}</span>
                        <span style="color:#e74c3c; font-weight:bold;">$${Number(m.precio_rebaja).toLocaleString('es-MX')}</span>
                    </p>
                `;
            }

            // === CAMBIO CLAVE: Altura de 320px y object-fit: cover ===
            contenedor.innerHTML += `
                <div class="product-card" style="position:relative; background:#fff; border-radius:12px; overflow:hidden; transition: transform 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    ${badgeHTML}
                    <a href="producto-detalle.html?id=${m.identificador}" style="text-decoration: none; color: inherit;">
                        <div style="width:100%; height:320px; overflow:hidden; background:#f9f8f4;">
                            <img src="${m.imagen_url}" alt="${m.titulo}" 
                                 style="width:100%; height:100%; object-fit:cover; object-position:center; transition: transform 0.5s ease;"
                                 onmouseover="this.style.transform='scale(1.05)'" 
                                 onmouseout="this.style.transform='scale(1)'">
                        </div>
                        <div style="padding:20px; text-align:center;">
                            <h3 style="font-size:16px; margin: 0 0 10px 0; font-weight: 500; color:#222;">${m.titulo}</h3>
                            ${precioHTML}
                        </div>
                    </a>
                </div>`;
        });
    } else {
        const seccion = document.querySelector('.relacionados-section');
        if(seccion) seccion.style.display = 'none';
    }
}


// ==========================================
// FUNCIONES GLOBALES DE FOTOS Y FLECHAS
// ==========================================

// Función cuando tocas una miniatura
window.cambiarFoto = function(elemento, srcNueva, index) {
    window.indiceFoto = index; // Guardamos el número de foto que tocaste
    
    document.getElementById('imagen-principal').style.opacity = '0.7';
    setTimeout(() => {
        document.getElementById('imagen-principal').src = srcNueva;
        document.getElementById('imagen-principal').style.opacity = '1';
    }, 150);
    
    document.querySelectorAll('.premium-gallery img').forEach(i => i.classList.remove('thumb-activa'));
    elemento.classList.add('thumb-activa');
};

// Función de las flechas
window.moverGaleria = function(direccion) {
    if(!window.galeriaActual || window.galeriaActual.length <= 1) return;

    window.indiceFoto += direccion;
    
    // Ciclo infinito: Si llegas al final, vuelve al principio y viceversa
    if(window.indiceFoto >= window.galeriaActual.length) window.indiceFoto = 0;
    if(window.indiceFoto < 0) window.indiceFoto = window.galeriaActual.length - 1;

    const srcNueva = window.galeriaActual[window.indiceFoto];
    
    // Cambiar la foto grande
    document.getElementById('imagen-principal').style.opacity = '0.7';
    setTimeout(() => {
        document.getElementById('imagen-principal').src = srcNueva;
        document.getElementById('imagen-principal').style.opacity = '1';
    }, 150);

    // Mover el bordecito dorado de la miniatura seleccionada
    const thumbs = document.querySelectorAll('.premium-gallery img');
    thumbs.forEach(i => i.classList.remove('thumb-activa'));
    if(thumbs[window.indiceFoto]) {
        thumbs[window.indiceFoto].classList.add('thumb-activa');
        // Para celulares: hacer que la miniatura se auto-deslice si se sale de la pantalla
        thumbs[window.indiceFoto].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
};


});