document.addEventListener('DOMContentLoaded', () => {
    
    // =================================================================
    // BASE DE DATOS MAESTRA (¡Ahora con todos los detalles!)
    // =================================================================
    
    const productsDB = {
        
        // --- APARTADO MESAS ---
        "comedor-4": { 
            title: "Comedor para 4 personas",
            price: "$45,000 MXN",
            // Descripción narrativa
            desc: "Una pieza maestra de una sola losa de Parota recuperada. Sus bordes naturales (live edge) se han preservado meticulosamente. Ideal para espacios chicos y darle un autentico espacio de lujo.",
            // Detalles técnicos específicos
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida de 3 pulgadas y base de acero negro calibre 14.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: [
                "img/comedores/4personas.png",
            ],
            sizes: ["3.00m x 1.10m", "2.40m x 1.00m", "Medida Personalizada"],
            category: "Comedores",
            categoryLink: "comedores.html",
        },

        "comedor-6": { 
            title: "Comedor para 6 personas",
            price: "$52,000 MXN",
            // Descripción narrativa
            desc: "Una pieza maestra de una sola losa de Parota recuperada. Sus bordes naturales (live edge) se han preservado meticulosamente. Ideal para espacios chicos y darle un autentico espacio de lujo.",
            // Detalles técnicos específicos
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida de 3 pulgadas y base de acero negro calibre 14.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: [
                "img/comedores/6personas1-banca.jpeg",
            ],
            sizes: ["3.00m x 1.10m", "2.40m x 1.00m", "Medida Personalizada"],
            category: "Comedores",
            categoryLink: "comedores.html",
        },

        "comedor-6.1": { 
            title: "Comedor para 6 personas",
            price: "$52,000 MXN",
            // Descripción narrativa
            desc: "Una pieza maestra de una sola losa de Parota recuperada. Sus bordes naturales (live edge) se han preservado meticulosamente. Ideal para espacios chicos y darle un autentico espacio de lujo.",
            // Detalles técnicos específicos
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida de 3 pulgadas y base de acero negro calibre 14.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: [
                "img/comedores/tablon6.1.jpeg",
            ],
            sizes: ["3.00m x 1.10m", "2.40m x 1.00m", "Medida Personalizada"],
            category: "Comedores",
            categoryLink: "comedores.html",
        },

        "comedor-6.2": { 
            title: "Comedor para 6 personas",
            price: "$52,000 MXN",
            // Descripción narrativa
            desc: "Una pieza maestra de una sola losa de Parota recuperada. Sus bordes naturales (live edge) se han preservado meticulosamente. Ideal para espacios chicos y darle un autentico espacio de lujo.",
            // Detalles técnicos específicos
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida de 3 pulgadas y base de acero negro calibre 14.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: [
                "img/comedores/tablon6.2.jpeg",
            ],
            sizes: ["3.00m x 1.10m", "2.40m x 1.00m", "Medida Personalizada"],
            category: "Comedores",
            categoryLink: "comedores.html",
        },


        "comedor-8": { 
            title: "Comedor para 8 personas",
            price: "$52,000 MXN",
            // Descripción narrativa
            desc: "Una pieza maestra de una sola losa de Parota recuperada. Sus bordes naturales (live edge) se han preservado meticulosamente. Ideal para espacios chicos y darle un autentico espacio de lujo.",
            // Detalles técnicos específicos
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida de 3 pulgadas y base de acero negro calibre 14.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: [
                "img/comedores/8personas-1.jpeg",
                "img/comedores/8personas-2.jpeg",
                "img/comedores/8personas-3.jpeg",
            ],
            sizes: ["3.00m x 1.10m", "2.40m x 1.00m", "Medida Personalizada"],
            category: "Comedores",
            categoryLink: "comedores.html",
        },

        // --- APARTADO SILLAS ---
        "silla-grecia": {
            title: "Silla Grecia Tejida",
            price: "$4,500 MXN",
            desc: "Silla artesanal que combina la robustez de la parota con la frescura del tejido natural. Perfecta para climas cálidos y comedores relajados.",
            finish: "Aceite de linaza natural (acabado poro abierto).",
            material: "Estructura de Parota sólida y tejido de palma real.",
            maintenance: "Hidratar la madera cada 6 meses con aceite.",
            images: [
                "img/sillas/grecia1.png",
                "img/sillas/grecia2.png",
                "img/sillas/grecia3.png",
                "img/sillas/grecia4.png"
            ],
            sizes: ["Estándar (Alto 85cm)", "Juego de 4 Sillas", "Juego de 8 Sillas"],
            category: "Sillas",
            categoryLink: "sillas.html",
        
        },
        
        "silla-luna": {
            title: "Silla Luna Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/luna3.png", "img/sillas/luna4.png", "img/sillas/luna1.png", "img/sillas/luna2.png"],
            sizes: ["Estandar comedor"],
            category: "Sillas",
            categoryLink: "sillas.html",
            variants: {
            name: "Color de Tapiz", // El título del menú
            options: ["Gris Oxford", "Beige Arena", "Negro Profundo", "Terracota"]
        },  variantImages: {
                "Gris Oxford": "img/sillas/silla-tulum-gris.jpg",   // Tu foto de la silla gris
                "Beige Arena": "img/sillas/silla-tulum-beige.jpg",  // Tu foto de la silla beige
                "Negro Profundo": "img/sillas/silla-tulum-negra.jpg" // Tu foto de la silla negra
            },
        },

        "silla-francia": {
            title: "Silla Francia Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/francia1.png", "img/sillas/francia2.png", "img/sillas/francia3.png", "img/sillas/francia4.png"],
            sizes: ["Estandar comedor"],
            category: "Sillas",
            categoryLink: "sillas.html",
        },

        "silla-merlin": {
            title: "Silla Merlin Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/merlin1.png", "img/sillas/merlin2.png", "img/sillas/merlin3.png", "img/sillas/merlin4.png"],
            sizes: ["Estandar comedor"],
            category: "Sillas",
            categoryLink: "sillas.html",
        },

        "silla-paris": {
            title: "Silla Paris Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/paris1.png", "img/sillas/paris2.png", "img/sillas/paris3.png", "img/sillas/paris4.png"],
            sizes: ["Estandar comedor"],
            category: "Sillas",
            categoryLink: "sillas.html",
        },

        "silla-zeta": {
            title: "Silla Zeta Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/zeta1.png", "img/sillas/zeta2.png", "img/sillas/zeta3.png", "img/sillas/zeta4.png"],
            sizes: ["Estandar comedor"],
            category: "Sillas",
            categoryLink: "sillas.html",

        },

    // --- APARTADO CREDENZAS ---
        "credenza1": {
            title: "Credenza Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/credenzas/credenza1.jpeg", "img/credenzas/credenza2.png", "img/credenzas/credenza3.png", "img/credenzas/credenza4.png"],
            sizes: ["Estandar comedor"],
            category: "Credenzas",
            categoryLink: "credenzas.html",
        },



        // APARTADO TV ---

        "muebletv1": {
            title: "Mueble TV Parota",
            price: "$5,000 MXN",
            desc: "Mueble de TV con estructura de parota sólida",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/muebles-tv/muebletv1.jpeg"],
            sizes: ["Para tv de 50 pulgadas"],
            category: "Muebles TV",
            categoryLink: "muebles-tv.html",
        },

        "muebletv2": {
            title: "Mueble TV Parota",
            price: "$5,000 MXN",
            desc: "Mueble de TV con estructura de parota sólida",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/muebles-tv/muebletv2.jpeg"],
            sizes: ["Para tv de 50 pulgadas"],
            category: "Muebles TV",
            categoryLink: "muebles-tv.html",
        },

        "muebletv3": {
            title: "Mueble TV Parota",
            price: "$5,000 MXN",
            desc: "Mueble de TV con estructura de parota sólida",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/muebles-tv/muebletv3.jpeg"],
            sizes: ["Para tv de 50 pulgadas"],
            category: "Muebles TV",
            categoryLink: "muebles-tv.html",
        },




        // Escritorios ----

        "escritorio1": {
            title: "Escritorio Parota",
            price: "$12,000 MXN",
            desc: "Escritorio de parota sólida con acabado en poliuretano mate.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/escritorios/escritorio1.jpeg"],
            sizes: ["1.20m x 0.60m"],
            category: "Escritorios",
            categoryLink: "escritorios.html",
        },


        "escritorio2": {
            title: "Escritorio Parota",
            price: "$12,000 MXN",
            desc: "Escritorio de parota sólida con acabado en poliuretano mate.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/escritorios/escritorio2.jpeg"],
            sizes: ["1.20m x 0.60m"],
            category: "Escritorios",
            categoryLink: "escritorios.html",
        },



        "escritorio3": {
            title: "Escritorio Parota",
            price: "$12,000 MXN",
            desc: "Escritorio de parota sólida con acabado en poliuretano mate.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/escritorios/escritorio3.jpeg"],
            sizes: ["1.20m x 0.60m"],
            category: "Escritorios",
            categoryLink: "escritorios.html",
        },



        // CABECERAS ----

        "cabecera1": {
            title: "Cabecera Parota",
            price: "$12,000 MXN",
            desc: "Cabecera de parota sólida con acabado en poliuretano mate.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/cabeceras/cabecera1.jpeg"],
            sizes: ["1.20m x 0.60m"],
            category: "Cabeceras",
            categoryLink: "cabeceras.html",
        },
        
        "cabecera2": {
            title: "Cabecera Parota",
            price: "$12,000 MXN",
            desc: "Cabecera de parota sólida con acabado en poliuretano mate.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/cabeceras/cabecera2.jpeg"],
            sizes: ["1.20m x 0.60m"],
            category: "Cabeceras",
            categoryLink: "cabeceras.html",
        },





        // CANTINAS ---

        "cantina1": {
            title: "Cantina Parota",
            price: "$12,000 MXN",
            desc: "Cantina de parota sólida con acabado en poliuretano mate.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/cantinas/cantina1.jpeg"],
            sizes: ["1.20m x 0.60m"],
            category: "Cantinas",
            categoryLink: "cantinas.html",
        },

        "cantina2": {
            title: "Cantina Parota",
            price: "$12,000 MXN",
            desc: "Cantina de parota sólida con acabado en poliuretano mate.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y herrería color negro mate",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/cantinas/cantina2.jpeg"],
            sizes: ["1.20m x 0.60m"],
            category: "Cantinas",
            categoryLink: "cantinas.html",
        },


        

    };

 

    const detailTitle = document.querySelector('.product-info-col h1');
    
    if (detailTitle) {
        // A. OBTENER DATOS
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');

        if (productId && productsDB[productId]) {
            const product = productsDB[productId];
            
            // B. LLENAR TEXTOS Y CREAR BOTONES DE VARIANTE
            // ============================================
            document.querySelector('.product-info-col h1').innerText = product.title;
            document.querySelector('.product-price').innerText = product.price;

            // Referencias a los elementos nuevos (Botones y Campo Oculto)
            const variantContainer = document.getElementById('variant-container');
            const variantLabel = document.getElementById('variant-label');
            const variantBtnContainer = document.getElementById('dynamic-variant-buttons');
            const hiddenVariantInput = document.getElementById('selected-variant-value'); 
            const sizeSelect = document.getElementById('dynamic-select');

            // 1. Limpiar contenedor de botones
            if (variantBtnContainer) variantBtnContainer.innerHTML = '';

            // 2. Lógica para crear botones
            if (product.variants && variantContainer) {
                variantContainer.style.display = 'block';
                variantLabel.innerText = product.variants.name + ":";
                
                // Crear un botón por cada opción
                product.variants.options.forEach((opt, index) => {
                    const btn = document.createElement('button');
                    btn.className = 'variant-btn'; // Clase CSS para estilo píldora
                    btn.innerText = opt;
                    
                    // El primero siempre activo por defecto
                    if (index === 0) {
                        btn.classList.add('active');
                        if (hiddenVariantInput) hiddenVariantInput.value = opt;
                    }

                    // AL HACER CLIC EN UN BOTÓN
                    btn.onclick = () => {
                        // a. Quitar clase active a todos
                        document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
                        // b. Poner active a este
                        btn.classList.add('active');
                        // c. Guardar valor en el input oculto
                        if (hiddenVariantInput) hiddenVariantInput.value = opt;
                        // d. ¡Actualizar Foto y WhatsApp! (Llamamos a la función de abajo)
                        updateVariantInfo(); 
                    };

                    variantBtnContainer.appendChild(btn);
                });
            } else if (variantContainer) {
                variantContainer.style.display = 'none';
            }
            
            // Ficha técnica segura
            const descElem = document.getElementById('dynamic-desc');
            if(descElem) descElem.innerText = product.desc;
            const finishElem = document.getElementById('dynamic-finish');
            if(finishElem) finishElem.innerText = product.finish;
            const matElem = document.getElementById('dynamic-material');
            if(matElem) matElem.innerText = product.material;
            const mainElem = document.getElementById('dynamic-maintenance');
            if(mainElem) mainElem.innerText = product.maintenance;
            
            // C. ACTUALIZAR BREADCRUMBS (MIGAS DE PAN)
            const breadSpan = document.querySelector('.breadcrumbs span');
            if(breadSpan) breadSpan.innerText = product.title;

            // Arreglar el link de la categoría (Para que no diga siempre Comedores)
            const catLink = document.getElementById('bread-category');
            if (catLink) {
                if (product.category) {
                    catLink.innerText = product.category;
                    catLink.href = product.categoryLink;
                } else {
                    catLink.innerText = "Catálogo";
                    catLink.href = "index.html";
                }
            }

            // D. LLENAR SELECT DE MEDIDAS
            const selectElement = document.getElementById('dynamic-select');
            if (selectElement && product.sizes) {
                selectElement.innerHTML = '';
                product.sizes.forEach(size => {
                    const option = document.createElement('option');
                    option.text = size;
                    option.value = size;
                    selectElement.add(option);
                });
            }

            // E. GALERÍA DE IMÁGENES (CARRUSEL)
            if (product.images && product.images.length > 0) {
                
                let currentImageIndex = 0;
                const totalImages = product.images.length;
                const mainImg = document.getElementById('main-product-image');
                const thumbs = document.querySelectorAll('.thumb-img');
                const prevBtn = document.getElementById('btn-prev');
                const nextBtn = document.getElementById('btn-next');

                function updateGallery(index) {
                    if (index < 0) index = totalImages - 1;
                    if (index >= totalImages) index = 0;
                    currentImageIndex = index;

                    if (mainImg) {
                        mainImg.style.opacity = '0.5';
                        setTimeout(() => {
                            mainImg.src = product.images[currentImageIndex];
                            mainImg.style.opacity = '1';
                        }, 200);
                    }

                    thumbs.forEach(t => t.classList.remove('active-thumb'));
                    if (thumbs[currentImageIndex]) {
                        thumbs[currentImageIndex].classList.add('active-thumb');
                    }
                }

                // Iniciar galería
                updateGallery(0);

                // Configurar miniaturas
                thumbs.forEach((thumb, index) => {
                    if (product.images[index]) {
                        thumb.src = product.images[index];
                        thumb.style.display = 'block';
                        thumb.onclick = () => updateGallery(index);
                    } else {
                        thumb.style.display = 'none';
                    }
                });

                // Configurar flechas
                if (prevBtn && nextBtn) {
                    if (totalImages > 1) {
                        prevBtn.onclick = () => updateGallery(currentImageIndex - 1);
                        nextBtn.onclick = () => updateGallery(currentImageIndex + 1);
                    } else {
                        prevBtn.style.display = 'none';
                        nextBtn.style.display = 'none';
                    }
                }
            }

            // ... (Después de tu código de galería de imágenes) ...

            // =================================================================
            // G. BOTÓN WHATSAPP DINÁMICO
            // =================================================================
           // G. LÓGICA DE VARIANTES (FOTO + WHATSAPP)
            // ========================================
            const waBtn = document.getElementById('whatsapp-link');
            
            // Definimos la función que usan los botones y el select de medida
            function updateVariantInfo() {
                // 1. OBTENER VALORES SELECCIONADOS
                // Intentamos leer del input oculto (botones), si no existe, string vacío
                const hiddenInput = document.getElementById('selected-variant-value');
                const selectedVariant = hiddenInput ? hiddenInput.value : "";
                const selectedSize = sizeSelect ? sizeSelect.value : "Estándar";

                // 2. CAMBIAR IMAGEN (Si el producto tiene fotos mapeadas para variantes)
                if (product.variantImages && selectedVariant) {
                    const newImageSrc = product.variantImages[selectedVariant];
                    
                    // Solo si existe foto para ese color, la cambiamos
                    if (newImageSrc) {
                        const mainImg = document.getElementById('main-product-image');
                        // Pequeño efecto fade para que no sea brusco
                        if (mainImg.src !== newImageSrc) { // Solo si es diferente
                            mainImg.style.opacity = '0.5';
                            setTimeout(() => {
                                mainImg.src = newImageSrc;
                                mainImg.style.opacity = '1';
                            }, 200);
                        }
                    }
                }

                // 3. ACTUALIZAR ENLACE DE WHATSAPP
                if (waBtn) {
                    const myNumber = "+524794084824"; // <--- ¡PON TU NÚMERO!
                    
                    let variantText = "";
                    if (product.variants && selectedVariant) {
                        variantText = ` | ${product.variants.name}: ${selectedVariant}`;
                    }

                    const message = `Hola Parota Studio. Me interesa cotizar:
Modelo: *${product.title}*
Precio: ${product.price}
Medida: ${selectedSize}${variantText}

¿Tienen envíos disponibles?`;

                    waBtn.href = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
                }
            }

            // Ejecutamos al inicio para que el link cargue bien
            updateVariantInfo();

            // Si cambian la medida, también actualizamos
            if (sizeSelect) sizeSelect.addEventListener('change', updateVariantInfo);

            // Ejecutamos la función al inicio
            

            // Y cada vez que el cliente cambie una opción, actualizamos el l

            // =================================================================
            // H. EFECTO LUPA (ZOOM) - REPARADO
            // =================================================================
            const zoomContainer = document.querySelector('.main-image-container');
            const zoomImg = document.getElementById('main-product-image');

            if (zoomContainer && zoomImg) {
                console.log("Sistema de Zoom Activado"); // Esto te avisa en la consola si funciona

                // 1. CUANDO EL MOUSE SE MUEVE SOBRE LA FOTO
                zoomContainer.addEventListener('mousemove', function(e) {
                    // Obtener dimensiones exactas
                    const { left, top, width, height } = zoomContainer.getBoundingClientRect();
                    
                    // Calcular posición del mouse en %
                    const x = ((e.clientX - left) / width) * 100;
                    const y = ((e.clientY - top) / height) * 100;

                    // Aplicar efecto
                    zoomImg.style.transformOrigin = `${x}% ${y}%`;
                    zoomImg.style.transform = "scale(1.8)"; // Escala de Zoom (1.8x)
                });

                // 2. CUANDO EL MOUSE SALE DE LA FOTO
                zoomContainer.addEventListener('mouseleave', function() {
                    zoomImg.style.transformOrigin = "center center";
                    zoomImg.style.transform = "scale(1)"; // Vuelve a tamaño normal
                });
            } else {
                console.log("Error: No encontré el contenedor del zoom (.main-image-container)");
            }

            // F. PRODUCTOS RELACIONADOS (Cross-Selling)
            // =================================================================
            // F. PRODUCTOS RELACIONADOS (MEJORADO: 3 ITEMS + ROTACIÓN + CENTRADO)
            // =================================================================
            const relatedGrid = document.getElementById('related-products-grid');
            const relatedSection = document.getElementById('related-section');
            
            if (relatedGrid && relatedSection) {
                relatedGrid.innerHTML = ''; 
                
                // 1. RECOLECTAR CANDIDATOS
                // Primero buscamos TODOS los que sean de la misma categoría
                let candidates = [];
                for (const key in productsDB) {
                    if (key !== productId && productsDB[key].category === product.category) {
                        candidates.push({ id: key, ...productsDB[key] });
                    }
                }

                // 2. BARAJAR (ROTACIÓN ALEATORIA)
                // Esto hace que cada vez que entres, veas muebles diferentes
                candidates.sort(() => Math.random() - 0.5);

                // 3. SELECCIONAR LOS PRIMEROS 3 (O menos si no hay tantos)
                const selected = candidates.slice(0, 3);

                // 4. RENDERIZAR
                if (selected.length > 0) {
                    relatedSection.style.display = 'block';
                    
                    // TRUCO DE CENTRADO:
                    // Usamos Flexbox en lugar de Grid para que si son 1, 2 o 3,
                    // siempre queden perfectamente centrados en la pantalla.
                    relatedGrid.style.display = "flex";
                    relatedGrid.style.flexWrap = "wrap";
                    relatedGrid.style.justifyContent = "center";
                    relatedGrid.style.gap = "20px";

                    selected.forEach(item => {
                        const img = (item.images && item.images.length > 0) ? item.images[0] : 'https://via.placeholder.com/300';

                        const card = document.createElement('div');
                        card.className = 'product-card';
                        // Forzamos un ancho máximo para que no se estiren demasiado
                        card.style.width = "300px"; 
                        card.style.flex = "0 0 auto"; // Evita que se encojan raro

                        card.innerHTML = `
                            <a href="producto-detalle.html?id=${item.id}">
                                <div class="product-image">
                                    <img src="${img}" alt="${item.title}" loading="lazy">
                                </div>
                                <div class="product-info">
                                    <h3>${item.title}</h3>
                                    <p class="price">${item.price}</p>
                                </div>
                            </a>
                        `;
                        relatedGrid.appendChild(card);
                    });

                } else {
                    relatedSection.style.display = 'none';
                }
            }
        }
    }


    // =================================================================
    // 3. FUNCIONES GLOBALES (Menú, Carrito, Buscador)
    // =================================================================

    // Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Carrito (Contador Visual)

    // SISTEMA DE BÚSQUEDA
    const searchBtn = document.getElementById('search-btn');
    const searchPanel = document.getElementById('search-panel');
    const closeSearch = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results-container');

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchPanel.classList.add('active');
            setTimeout(() => searchInput.focus(), 100);
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', () => {
            searchPanel.classList.remove('active');
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const text = e.target.value.toLowerCase();
            resultsContainer.innerHTML = ''; 

            if (text.length < 2) return;

            for (const id in productsDB) {
                const product = productsDB[id];
                const title = product.title.toLowerCase();
                const desc = product.desc.toLowerCase();
                
                // Busca en Título O Descripción
                if (title.includes(text) || desc.includes(text)) {
                    
                    const resultCard = document.createElement('div');
                    resultCard.classList.add('search-item');
                    const imgUrl = (product.images && product.images.length > 0) ? product.images[0] : 'https://via.placeholder.com/150';

                    resultCard.innerHTML = `
                        <a href="producto-detalle.html?id=${id}">
                            <img src="${imgUrl}" alt="${product.title}">
                            <h4>${product.title}</h4>
                            <p>${product.price}</p>
                        </a>
                    `;
                    resultsContainer.appendChild(resultCard);
                }
            }

            if (resultsContainer.innerHTML === '') {
                resultsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No encontramos coincidencias.</p>';
            }
        });
    }

});