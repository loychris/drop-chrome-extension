
//////////////////////////// 9GAG /////////////////////////////

if(window.location.href.startsWith("https://9gag.com/")){

    const saveToDestination = (id, destination) => { 
        console.log(`Saving ${id} to Stream`);
        $(`#${destination}_${id}`).css("border", "1px solid #ffffff");
        $(`#${destination}_${id}`).css("font-weight", "bold");
        $(`#${destination}_${id}`).css("color", "#ffffff");
        $(`#icon_${destination}_${id}`).remove();
        let icon;
        switch(destination){
            case 'stream': 
            case 'streamt': icon = 'drop';break; 
            case 'instagram':
            case 'igStory': icon = 'instagram'; break; 
            case 'twitter': icon = 'twitter'; break;
            case 'tumblr': icon = 'tumblr'; break; 
            default: icon = 'drop';
        }

        $(`#${destination}_${id}`).prepend(getLogo(icon, true, `${destination}_${id}`));
    }


    getIdsForStreamContainer = (streamContainerId) => {
        const articles = $(`#${streamContainerId}`).find('article');
        let articleIds = [];
        $.each( articles, ( i, value ) => {
            articleIds.push(value.id);
        });
        return (articleIds);
    }

    const getLogo = (x, glow, id) => {
        if(glow){
            switch(x) {
                case 'drop': 
                return(`
                    <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <rect width="26" height="26" rx="3" fill="#121218"/>
                        <g filter="url(#filter0_dd)">
                        <path d="M18.1553 14.6947C18.1553 15.1619 18.2706 20.457 12.9245 20.457C7.50142 20.457 7.73219 14.6947 7.73219 14.6947C7.73219 11.6189 12.6937 5.23361 12.9245 5C13.1553 5.23361 18.1553 10.8012 18.1553 14.6947Z" fill="white"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_dd" x="-2.26923" y="-5" width="30.4247" height="35.457" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0685603 0 0 0 0 0.608795 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        drop2<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2.5"/>
                        <feColorMatrix type="matrix"saveToStreamWithTitle values="0 0 0 0 0.58106 0 0 0 0 0.798909 0 0 0 0 1 0 0 0 0.8 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                        </filter>
                        <clipPath id="clip0">
                        <rect width="26" height="26" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                `)
                case 'twitter': 
                    return(`
                        <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <rect width="26" height="26" rx="3" fill="#121218"/>
                            <g filter="url(#filter0_dd)">
                            <path d="M10.1025 19.208C16.232 19.208 19.586 14.125 19.586 9.7245C19.586 9.5815 19.586 9.4385 19.5795 9.2955C20.2295 8.8275 20.795 8.236 21.2435 7.5665C20.6455 7.833 20.002 8.0085 19.326 8.093C20.015 7.6835 20.5415 7.027 20.795 6.247C20.1515 6.6305 19.4365 6.9035 18.676 7.053C18.065 6.403 17.2005 6 16.245 6C14.4055 6 12.9105 7.495 12.9105 9.3345C12.9105 9.5945 12.943 9.848 12.995 10.095C10.226 9.9585 7.769 8.626 6.1245 6.611C5.8385 7.105 5.676 7.677 5.676 8.288C5.676 9.445 6.2675 10.4655 7.158 11.0635C6.612 11.044 6.0985 10.8945 5.65 10.6475C5.65 10.6605 5.65 10.6735 5.65 10.693C5.65 12.305 6.8005 13.657 8.3215 13.9625C8.042 14.0405 7.7495 14.0795 7.444 14.0795C7.2295 14.0795 7.0215 14.06 6.82 14.021C7.2425 15.347 8.4775 16.309 9.9335 16.335C8.7895 17.232 7.353 17.765 5.793 17.765C5.5265 17.765 5.26 17.752 5 17.7195C6.469 18.6555 8.224 19.208 10.1025 19.208Z" fill="white"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_dd" x="-5" y="-4" width="36.2435" height="33.208" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0685603 0 0 0 0 0.608795 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="2.5"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.58106 0 0 0 0 0.798909 0 0 0 0 1 0 0 0 0.8 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                            </filter>
                            <clipPath id="clip0">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    `);
                case 'tumblr': 
                    return(`
                        <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <rect width="26" height="26" rx="3" fill="#121218"/>
                            <g filter="url(#filter0_dd)">
                            <path d="M14.3459 22C11.9512 22 10.1752 20.6102 10.1752 17.2768V11.9435H8V9.05085C10.3947 8.35028 11.3925 6.0226 11.5022 4H13.9867V8.58757H16.8803V11.9435H13.9867V16.5876C13.9867 17.9774 14.6053 18.4633 15.5931 18.4633H17V22H14.3459Z" fill="white"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_dd" x="-2" y="-6" width="29" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0685603 0 0 0 0 0.608795 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="2.5"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.58106 0 0 0 0 0.798909 0 0 0 0 1 0 0 0 0.8 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                            </filter>
                            <clipPath id="clip0">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    `);

                case 'instagram': 
                    return(`
                    <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="26" height="26" rx="3" fill="#121218"/>
                        <g clip-path="url(#clip0)">
                        <g filter="url(#filter0_dd)">
                        <path d="M13 4.80184C15.6701 4.80184 15.9864 4.812 17.0408 4.86011C18.0158 4.90461 18.5453 5.06752 18.8977 5.20443C19.3644 5.38583 19.6976 5.60257 20.0475 5.95248C20.3974 6.30239 20.6142 6.63555 20.7955 7.10229C20.9325 7.4547 21.0954 7.98419 21.1399 8.95914C21.188 10.0136 21.1982 10.3299 21.1982 13C21.1982 15.6701 21.188 15.9864 21.1399 17.0409C21.0954 18.0158 20.9325 18.5453 20.7955 18.8978C20.6142 19.3645 20.3974 19.6976 20.0475 20.0476C19.6976 20.3975 19.3644 20.6142 18.8977 20.7956C18.5453 20.9325 18.0158 21.0954 17.0408 21.1399C15.9865 21.188 15.6703 21.1982 13 21.1982C10.3297 21.1982 10.0134 21.188 8.95914 21.1399C7.98415 21.0954 7.45466 20.9325 7.10229 20.7956C6.63551 20.6142 6.30235 20.3975 5.95244 20.0476C5.60253 19.6976 5.38579 19.3645 5.20443 18.8978C5.06748 18.5453 4.90457 18.0158 4.86007 17.0409C4.81196 15.9864 4.8018 15.6701 4.8018 13C4.8018 10.3299 4.81196 10.0136 4.86007 8.95918C4.90457 7.98419 5.06748 7.4547 5.20443 7.10229C5.38579 6.63555 5.60253 6.30239 5.95244 5.95248C6.30235 5.60257 6.63551 5.38583 7.10229 5.20443C7.45466 5.06752 7.98415 4.90461 8.9591 4.86011C10.0136 4.812 10.3299 4.80184 13 4.80184ZM13 3C10.2841 3 9.94362 3.01151 8.87701 3.06018C7.81259 3.10876 7.08569 3.27779 6.44958 3.52501C5.79199 3.78056 5.23432 4.1225 4.67839 4.67843C4.12246 5.23436 3.78052 5.79203 3.52497 6.44962C3.27775 7.08573 3.10872 7.81263 3.06014 8.87705C3.01147 9.94362 3 10.2842 3 13C3 15.7159 3.01147 16.0564 3.06014 17.123C3.10872 18.1874 3.27775 18.9143 3.52497 19.5504C3.78052 20.208 4.12246 20.7657 4.67839 21.3216C5.23432 21.8775 5.79199 22.2195 6.44958 22.475C7.08569 22.7223 7.81259 22.8913 8.87701 22.9399C9.94362 22.9885 10.2841 23 13 23C15.7158 23 16.0564 22.9885 17.1229 22.9399C18.1874 22.8913 18.9143 22.7223 19.5504 22.475C20.208 22.2195 20.7656 21.8775 21.3216 21.3216C21.8775 20.7657 22.2194 20.208 22.475 19.5504C22.7222 18.9143 22.8912 18.1874 22.9398 17.123C22.9885 16.0564 23 15.7159 23 13C23 10.2842 22.9885 9.94362 22.9398 8.87705C22.8912 7.81263 22.7222 7.08573 22.475 6.44962C22.2194 5.79203 21.8775 5.23436 21.3216 4.67843C20.7656 4.1225 20.208 3.78056 19.5504 3.52501C18.9143 3.27779 18.1874 3.10876 17.1229 3.06018C16.0564 3.01151 15.7158 3 13 3ZM13 7.86487C10.1639 7.86487 7.86483 10.164 7.86483 13C7.86483 15.8361 10.1639 18.1352 13 18.1352C15.836 18.1352 18.1351 15.8361 18.1351 13C18.1351 10.164 15.836 7.86487 13 7.86487ZM13 16.3334C11.159 16.3334 9.66663 14.841 9.66663 13C9.66663 11.1591 11.159 9.66667 13 9.66667C14.8409 9.66667 16.3333 11.1591 16.3333 13C16.3333 14.841 14.8409 16.3334 13 16.3334ZM19.538 7.66199C19.538 8.32474 19.0008 8.86201 18.338 8.86201C17.6753 8.86201 17.138 8.32474 17.138 7.66199C17.138 6.99924 17.6753 6.462 18.338 6.462C19.0008 6.462 19.538 6.99924 19.538 7.66199Z" fill="white"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_dd" x="-7" y="-7" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0685603 0 0 0 0 0.608795 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2.5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.58106 0 0 0 0 0.798909 0 0 0 0 1 0 0 0 0.8 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                        </filter>
                        <clipPath id="clip0">
                        <rect width="26" height="26" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    `)
                default: return ''; 
            }
        } else {
            switch(x) {
                case 'drop': 
                return(`
                    <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <rect width="26" height="26" rx="3" fill="#121218"/>
                        <g filter="url(#filter0_d)">
                        <path d="M18.1553 14.6947C18.1553 15.1619 18.2706 20.457 12.9245 20.457C7.50142 20.457 7.73219 14.6947 7.73219 14.6947C7.73219 11.6189 12.6937 5.23361 12.9245 5C13.1553 5.23361 18.1553 10.8012 18.1553 14.6947Z" fill="url(#paint0_linear)"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="1.73077" y="-1" width="22.4247" height="27.457" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.176894 0 0 0 0 0.555523 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear" x1="9.73077" y1="12.2807" x2="17.1519" y2="18.4986" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5D70C8"/>
                        <stop offset="1" stop-color="#A7FAE6"/>
                        </linearGradient>
                        <clipPath id="clip0">
                        <rect width="26" height="26" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                `)
                case 'twitter': 
                    return(`
                        <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M22.75 26H3.25C1.456 26 0 24.544 0 22.75V3.25C0 1.456 1.456 0 3.25 0H22.75C24.544 0 26 1.456 26 3.25V22.75C26 24.544 24.544 26 22.75 26Z" fill="#121218"/>
                            <g filter="url(#filter0_d)">
                            <path d="M9.98404 19.604C16.1135 19.604 19.4675 14.521 19.4675 10.1205C19.4675 9.97749 19.4675 9.83449 19.461 9.69149C20.111 9.22349 20.6765 8.63199 21.125 7.96249C20.527 8.22899 19.8835 8.40449 19.2075 8.48899C19.8965 8.07949 20.423 7.42299 20.6765 6.64299C20.033 7.02649 19.318 7.29949 18.5575 7.44899C17.9465 6.79899 17.082 6.39599 16.1265 6.39599C14.287 6.39599 12.792 7.89099 12.792 9.73049C12.792 9.99049 12.8245 10.244 12.8765 10.491C10.1075 10.3545 7.65054 9.02199 6.00604 7.00699C5.72004 7.50099 5.55754 8.07299 5.55754 8.68399C5.55754 9.84099 6.14904 10.8615 7.03954 11.4595C6.49354 11.44 5.98004 11.2905 5.53154 11.0435C5.53154 11.0565 5.53154 11.0695 5.53154 11.089C5.53154 12.701 6.68204 14.053 8.20304 14.3585C7.92354 14.4365 7.63104 14.4755 7.32554 14.4755C7.11104 14.4755 6.90304 14.456 6.70154 14.417C7.12404 15.743 8.35904 16.705 9.81504 16.731C8.67104 17.628 7.23454 18.161 5.67454 18.161C5.40804 18.161 5.14154 18.148 4.88154 18.1155C6.35054 19.0515 8.10554 19.604 9.98404 19.604Z" fill="url(#paint0_linear)"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="-1.11846" y="0.395994" width="28.2435" height="25.208" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.176894 0 0 0 0 0.555523 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear" x1="7.99789" y1="12.6174" x2="13.9005" y2="21.6357" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5D70C8"/>
                            <stop offset="1" stop-color="#A7FAE6"/>
                            </linearGradient>
                            <clipPath id="clip0">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    `);
                case 'tumblr': 
                    return(`
                        <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <rect width="26" height="26" rx="3" fill="#121218"/>
                            <g filter="url(#filter0_d)">
                            <path d="M14.3459 22C11.9512 22 10.1752 20.6102 10.1752 17.2768V11.9435H8V9.05085C10.3947 8.35028 11.3925 6.0226 11.5022 4H13.9867V8.58757H16.8803V11.9435H13.9867V16.5876C13.9867 17.9774 14.6053 18.4633 15.5931 18.4633H17V22H14.3459Z" fill="url(#paint0_linear)"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="2" y="-2" width="21" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.176894 0 0 0 0 0.555523 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear" x1="9.72667" y1="12.4786" x2="17.5953" y2="17.3663" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5D70C8"/>
                            <stop offset="1" stop-color="#A7FAE6"/>
                            </linearGradient>
                            <clipPath id="clip0">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    `);

                case 'instagram': 
                    return(`
                        <svg class="dropLogo" id="icon_${id}" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="3" fill="#121218"/>
                            <g clip-path="url(#clip0)">
                            <g filter="url(#filter0_d)">
                            <path d="M13 4.80184C15.6701 4.80184 15.9864 4.812 17.0408 4.86011C18.0158 4.90461 18.5453 5.06752 18.8977 5.20443C19.3644 5.38583 19.6976 5.60257 20.0475 5.95248C20.3974 6.30239 20.6142 6.63555 20.7955 7.10229C20.9325 7.4547 21.0954 7.98419 21.1399 8.95914C21.188 10.0136 21.1982 10.3299 21.1982 13C21.1982 15.6701 21.188 15.9864 21.1399 17.0409C21.0954 18.0158 20.9325 18.5453 20.7955 18.8978C20.6142 19.3645 20.3974 19.6976 20.0475 20.0476C19.6976 20.3975 19.3644 20.6142 18.8977 20.7956C18.5453 20.9325 18.0158 21.0954 17.0408 21.1399C15.9865 21.188 15.6703 21.1982 13 21.1982C10.3297 21.1982 10.0134 21.188 8.95914 21.1399C7.98415 21.0954 7.45466 20.9325 7.10229 20.7956C6.63551 20.6142 6.30235 20.3975 5.95244 20.0476C5.60253 19.6976 5.38579 19.3645 5.20443 18.8978C5.06748 18.5453 4.90457 18.0158 4.86007 17.0409C4.81196 15.9864 4.8018 15.6701 4.8018 13C4.8018 10.3299 4.81196 10.0136 4.86007 8.95918C4.90457 7.98419 5.06748 7.4547 5.20443 7.10229C5.38579 6.63555 5.60253 6.30239 5.95244 5.95248C6.30235 5.60257 6.63551 5.38583 7.10229 5.20443C7.45466 5.06752 7.98415 4.90461 8.9591 4.86011C10.0136 4.812 10.3299 4.80184 13 4.80184ZM13 3C10.2841 3 9.94362 3.01151 8.87701 3.06018C7.81259 3.10876 7.08569 3.27779 6.44958 3.52501C5.79199 3.78056 5.23432 4.1225 4.67839 4.67843C4.12246 5.23436 3.78052 5.79203 3.52497 6.44962C3.27775 7.08573 3.10872 7.81263 3.06014 8.87705C3.01147 9.94362 3 10.2842 3 13C3 15.7159 3.01147 16.0564 3.06014 17.123C3.10872 18.1874 3.27775 18.9143 3.52497 19.5504C3.78052 20.208 4.12246 20.7657 4.67839 21.3216C5.23432 21.8775 5.79199 22.2195 6.44958 22.475C7.08569 22.7223 7.81259 22.8913 8.87701 22.9399C9.94362 22.9885 10.2841 23 13 23C15.7158 23 16.0564 22.9885 17.1229 22.9399C18.1874 22.8913 18.9143 22.7223 19.5504 22.475C20.208 22.2195 20.7656 21.8775 21.3216 21.3216C21.8775 20.7657 22.2194 20.208 22.475 19.5504C22.7222 18.9143 22.8912 18.1874 22.9398 17.123C22.9885 16.0564 23 15.7159 23 13C23 10.2842 22.9885 9.94362 22.9398 8.87705C22.8912 7.81263 22.7222 7.08573 22.475 6.44962C22.2194 5.79203 21.8775 5.23436 21.3216 4.67843C20.7656 4.1225 20.208 3.78056 19.5504 3.52501C18.9143 3.27779 18.1874 3.10876 17.1229 3.06018C16.0564 3.01151 15.7158 3 13 3ZM13 7.86487C10.1639 7.86487 7.86483 10.164 7.86483 13C7.86483 15.8361 10.1639 18.1352 13 18.1352C15.836 18.1352 18.1351 15.8361 18.1351 13C18.1351 10.164 15.836 7.86487 13 7.86487ZM13 16.3334C11.159 16.3334 9.66663 14.841 9.66663 13C9.66663 11.1591 11.159 9.66667 13 9.66667C14.8409 9.66667 16.3333 11.1591 16.3333 13C16.3333 14.841 14.8409 16.3334 13 16.3334ZM19.538 7.66199C19.538 8.32474 19.0008 8.86201 18.338 8.86201C17.6753 8.86201 17.138 8.32474 17.138 7.66199C17.138 6.99924 17.6753 6.462 18.338 6.462C19.0008 6.462 19.538 6.99924 19.538 7.66199Z" fill="url(#paint0_linear)"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="-3" y="-3" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.176894 0 0 0 0 0.555523 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear" x1="6.83704" y1="12.4207" x2="16.3648" y2="24.2572" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5D70C8"/>
                            <stop offset="1" stop-color="#A7FAE6"/>
                            </linearGradient>
                            <clipPath id="clip0">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    `)
                default: return ''; 
            }
        }
        
    }


    const addDropOtions = (articleIds) => {
        articleIds.forEach(id => {
            if(id.startsWith('jsid-post')){
                $(`#${id}`).children(".post-container").prepend(`
                    <div class='drop-area-container'>
                        <div class="drop-area">
                            <div class="dropOptionContainer" id="stream_${id}">
                                ${getLogo('drop', false, `stream_${id}`)}
                                <div>Stream</div>
                            </div>
                            <div class="dropOptionContainer" id="streamt_${id}">
                                ${getLogo('drop', false, `streamt_${id}`)}
                                <div>with Title</div>
                            </div>
                            <div class="dropOptionContainer" id="instagram_${id}">
                                ${getLogo('instagram', false, `instagram_${id}`)}
                                <div>Instagram</div>
                            </div>
                            <div class="dropOptionContainer" id="igStory_${id}">
                                ${getLogo('instagram', false, `igStory_${id}`)}
                                <div>Story</div>
                            </div>
                            <div class="dropOptionContainer" id="twitter_${id}">
                                ${getLogo('twitter', false, `twitter_${id}`)}
                                <div>Twitter</div>
                            </div>
                            <div class="dropOptionContainer" id="tumblr_${id}">
                                ${getLogo('tumblr', false, `tumblr_${id}`)}
                                <div>Tumblr</div>
                            </div>
                        </div>
                    </div>
                `)
                $(`#stream_${id}`).bind('click', () => saveToDestination(id, 'stream'));
                $(`#streamt_${id}`).bind('click', () => saveToDestination(id, 'streamt'));
                $(`#instagram_${id}`).bind('click', () => saveToDestination(id, 'instagram'));
                $(`#igStory_${id}`).bind('click', () => saveToDestination(id, 'igStory'));
                $(`#twitter_${id}`).bind('click', () => saveToDestination(id, 'twitter'));
                $(`#tumblr_${id}`).bind('click', () => saveToDestination(id, 'tumblr'));
            }
        }); 
    }

    let initialIds = [];
    const firstArticles = $('article');
    $.each(firstArticles, (i, value) => {
        initialIds.push(value.id);
    });
    addDropOtions(initialIds);
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if(mutation.addedNodes.length){
                mutation.addedNodes.forEach(x => {
                    addDropOtions(getIdsForStreamContainer(x.id));
                });
            }
        })
    });
    const endlessScrollSection = document.querySelector('#list-view-2');
    if(endlessScrollSection){
        observer.observe(endlessScrollSection, {
            childList: true
        })
    }

}

///////////////////////////////////////////////////////////////



