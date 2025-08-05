    const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
    const select = document.querySelector('.breeds');

    fetch(BREEDS_URL) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option')
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })

    select.addEventListener("change", function(event) {
        const selectedBreed = event.target.value;
        let url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

        function newDog() {
            const imgContainer = document.querySelector('.img');
            imgContainer.innerHTML = '<div class="spinner">Dogs</div>';
            fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                imgContainer.innerHTML = '';
                
                // Wait for image to load, then get color palette
                const img = document.createElement("img");
                img.crossOrigin = "anonymous";
                img.src = data.message;
                img.alt = selectedBreed;
                
                img.onload = function() {
                    console.log('Image loaded, extracting colors...');
                    try {
                        const colorThief = new ColorThief();
                        const dominantColor = colorThief.getColor(img);
                        const palette = colorThief.getPalette(img, 5); // Get 5 colors
                        /*console.log('Dominant color:', dominantColor);*/
                        console.log('Color palette:', palette);
                        
                        // Create color palette display
                        const paletteContainer = document.createElement('div');
                        paletteContainer.className = 'palette';
                        
                        /* Add dominant color
                        const dominantSwatch = document.createElement('div');
                        dominantSwatch.className = 'color-swatch dominant';
                        dominantSwatch.style.backgroundColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
                        dominantSwatch.title = `Dominant: rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
                        paletteContainer.appendChild(dominantSwatch);*/
                        
                        // Add palette colors
                        palette.forEach((color, index) => {
                            const swatch = document.createElement('div');
                            swatch.className = 'color-swatch';
                            swatch.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                            
                            // Convert RGB to hex
                            const hex = '#' + color.map(c => c.toString(16).padStart(2, '0')).join('');
                            
                            // Create a container for the hex code
                            const hexContainer = document.createElement('div');
                            hexContainer.className = 'hex-container';
                            hexContainer.textContent = hex;
                            
                            swatch.appendChild(hexContainer);
                            swatch.title = `Click to copy: ${hex}`;
                            
                            // Add click event to copy hex code
                            swatch.addEventListener('click', function() {
                                navigator.clipboard.writeText(hex).then(function() {
                                    // Show feedback
                                    const originalText = hexContainer.textContent;
                                    hexContainer.textContent = 'Copied!';
                                    hexContainer.style.fontSize = '12px';
                                    
                                    setTimeout(function() {
                                        hexContainer.textContent = originalText;
                                        hexContainer.style.fontSize = '14px';
                                    }, 1000);
                                }).catch(function(err) {
                                    console.error('Failed to copy: ', err);
                                });
                            });
                            
                            paletteContainer.appendChild(swatch);
                        });
                        
                        // Add palette first, then image
                        imgContainer.appendChild(paletteContainer);
                        imgContainer.appendChild(img);
                        console.log('Palette added to DOM');
                    } catch (error) {
                        console.error('Error extracting colors:', error);
                        // If color extraction fails, still show the image
                        imgContainer.appendChild(img);
                    }
                };
            })
            .catch(function(error) {
                imgContainer.innerHTML = '<p>Error loading image</p>';
            });
        }

        newDog();
        
    });

