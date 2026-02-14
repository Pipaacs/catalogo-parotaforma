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
            title: "Silla Grecia",
            price: "$4,500 MXN",
            desc: "Silla artesanal que combina la robustez de la parota con la frescura del tejido natural. Perfecta para climas cálidos y comedores relajados.",
            finish: "Aceite de linaza natural (acabado poro abierto).",
            material: "Estructura de Parota sólida y tejido de palma real.",
            maintenance: "Hidratar la madera cada 6 meses con aceite.",
            images: [
                "img/sillas/grecia/grecia1.png",
                "img/sillas/grecia/grecia2.png",
                "img/sillas/grecia/grecia3.png",
                "img/sillas/grecia/grecia4.png"
            ],
            sizes: ["Estándar (Alto 80cm x Largo 57cm x Ancho 59cm)",],
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
            images: ["img/sillas/luna/luna3.png", "img/sillas/luna/luna4.png", "img/sillas/luna/luna1.png", "img/sillas/luna/luna2.png"],
            sizes: ["(Alto 77cm x Largo 56cm x Ancho 53cm)"],
            category: "Sillas",
            categoryLink: "sillas.html",
            
        },

        "silla-francia": {
            title: "Silla Francia Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/francia/francia1.png", "img/sillas/francia/francia2.png", "img/sillas/francia/francia3.png", "img/sillas/francia/francia4.png"],
            sizes: ["(Alto 79cm x Largo 50cm x Ancho 61cm)"],
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
            images: ["img/sillas/merlin/merlin1.png", "img/sillas/merlin/merlin2.png", "img/sillas/merlin/merlin3.png", "img/sillas/merlin/merlin4.png"],
            sizes: ["(Alto 84cm x Largo 57cm x Ancho 50cm)"],
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
            images: ["img/sillas/paris/paris1.png", "img/sillas/paris/paris2.png", "img/sillas/paris/paris3.png", "img/sillas/paris/paris4.png"],
            sizes: ["(Alto 85cm x Largo 56cm x Ancho 51cm)"],
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
            images: ["img/sillas/zeta/zeta1.png", "img/sillas/zeta/zeta2.png", "img/sillas/zeta/zeta3.png", "img/sillas/zeta/zeta4.png"],
            sizes: ["(Alto 105cm x Largo 44cm x Ancho 48cm)"],
            category: "Sillas",
            categoryLink: "sillas.html",

        },

        "silla-modern": {
            title: "Silla Modern Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/modern/modern1.jpeg", "img/sillas/modern/modern3.png", "img/sillas/modern/modern2.png", "img/sillas/modern/modern4.png"],
            sizes: ["(Alto 82cm x Largo 44cm x Ancho 47cm)"],
            category: "Sillas",
            categoryLink: "sillas.html",

        },

        "silla-venecia": {
            title: "Silla Venecia Parota",
            price: "$5,000 MXN",
            desc: "Silla de diseño minimalista con estructura de parota sólida y asiento de tela tejida. Ideal para espacios modernos.",
            finish: "Poliuretano Mate grado automotriz (3 capas).",
            material: "Parota sólida y tela tejida de alta calidad.",
            maintenance: "Limpiar con paño húmedo. No usar químicos abrasivos.",
            images: ["img/sillas/venecia/venecia1.png", "img/sillas/venecia/venecia2.png", "img/sillas/venecia/venecia3.png", "img/sillas/venecia/venecia4.png"],
            sizes: ["(Alto 62cm x Largo 52cm x Ancho 54cm)"],
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
                // --- LÓGICA DEL BOTÓN MERCADO LIBRE ---
const mlBtn = document.getElementById('ml-link');

if (mlBtn) {
    if (product.mlLink) {
        mlBtn.href = product.mlLink;
        mlBtn.style.display = 'block'; // Lo mostramos si hay link
    } else {
        mlBtn.style.display = 'none'; // Lo ocultamos si no tiene link de ML
    }
}
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
                    const myNumber = "524794084824"; // <--- ¡PON TU NÚMERO!
                    
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


    // Función que busca en tu nueva base de datos mientras escribes
    
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
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    if (btnWhatsapp) {
        btnWhatsapp.onclick = () => {
            // ⚠️ IMPORTANTE: Cambia este número por el de tu vendedor.
            // Debe llevar el código de país (52 para México) sin el signo +.
            const numeroVentas = "5214794084824"; 
            
            // Capturamos el enlace donde está el cliente actualmente
            const enlaceMueble = window.location.href; 
            
            // Redactamos el mensaje automático
            const mensaje = `Hola, me interesa este mueble: *${producto.titulo}*.\nPrecio marcado: $${Number(producto.precio).toLocaleString('es-MX')} MXN.\n\nAquí está el enlace: ${enlaceMueble}`;
            
            // Creamos el enlace oficial de WhatsApp y lo abrimos en otra pestaña
            const whatsappUrl = `https://wa.me/${numeroVentas}?text=${encodeURIComponent(mensaje)}`;
            window.open(whatsappUrl, '_blank');
        };
    }
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