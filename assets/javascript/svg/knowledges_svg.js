const figma_div = $(".figma_skill");
const html_div = $(".html_skill");
const css_div = $(".css_skill");
const js_div = $(".js_skill");
const php_div = $(".php_skill");
const mysql_div = $(".mysql_skill");
const vscode_div = $(".vscode_skill");
const git_div = $(".git_skill");
const ps_div = $(".ps_skill");



let figma_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 384"><path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"/><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"/><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"/><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"/><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"/></svg>';

let html_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 361"><path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11Z"/><path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128V337.95Z"/><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704Zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471Z"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0Zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001ZM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0Zm62.74 0h16.235v32.508h22.824v16.05h-39.06V0Z"/><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937Zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86Z"/></svg>';

let css_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 361"><path fill="#264DE4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962Z"/><path fill="#2965F1" d="m212.417 314.547l19.86-222.49H128V337.95l84.417-23.403Z"/><path fill="#EBEBEB" d="m53.669 188.636l2.862 31.937H128v-31.937H53.669Zm-5.752-64.641l2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58Z"/><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0Zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0Zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0Z"/><path fill="#FFF" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576Z"/></svg>';

let js_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="#f5de19" d="M2 2h28v28H2z"/><path d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"/></svg>';

let php_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 32 32"><defs><radialGradient id="vscodeIconsFileTypePhp0" cx="-16.114" cy="20.532" r="18.384" gradientTransform="translate(26.52 -9.307)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#4c6b96"/><stop offset="1" stop-color="#231f20"/></radialGradient></defs><ellipse cx="16" cy="16" fill="url(#vscodeIconsFileTypePhp0)" rx="14" ry="7.365"/><ellipse cx="16" cy="16" fill="#6280b6" rx="13.453" ry="6.818"/><path fill="#fff" d="m18.725 18.2l.667-3.434a1.752 1.752 0 0 0-.372-1.719a2.929 2.929 0 0 0-2-.525h-1.153l.331-1.7a.219.219 0 0 0-.215-.26h-1.6a.219.219 0 0 0-.215.177l-.709 3.646a2.051 2.051 0 0 0-.477-1.054a2.783 2.783 0 0 0-2.2-.807H7.7a.219.219 0 0 0-.215.177l-1.434 7.38a.219.219 0 0 0 .215.26h1.603a.219.219 0 0 0 .215-.177l.347-1.785h1.2a5.167 5.167 0 0 0 1.568-.2a3.068 3.068 0 0 0 1.15-.689a3.538 3.538 0 0 0 .68-.844l-.287 1.475a.219.219 0 0 0 .215.26h1.6a.219.219 0 0 0 .215-.177l.787-4.051h1.094c.466 0 .6.093.64.133s.1.165.025.569l-.635 3.265a.219.219 0 0 0 .215.26h1.62a.219.219 0 0 0 .207-.18Zm-7.395-2.834a1.749 1.749 0 0 1-.561 1.092a2.171 2.171 0 0 1-1.315.321h-.712l.515-2.651h.921c.677 0 .949.145 1.059.266a1.181 1.181 0 0 1 .093.972Zm14.216-2.034a2.783 2.783 0 0 0-2.2-.807h-3.091a.219.219 0 0 0-.215.177l-1.434 7.38a.219.219 0 0 0 .215.26h1.608a.219.219 0 0 0 .215-.177l.347-1.785h1.2a5.167 5.167 0 0 0 1.568-.2a3.068 3.068 0 0 0 1.15-.689a3.425 3.425 0 0 0 1.076-1.927a2.512 2.512 0 0 0-.439-2.232Zm-1.667 2.034a1.749 1.749 0 0 1-.561 1.092a2.171 2.171 0 0 1-1.318.32h-.71l.515-2.651h.921c.677 0 .949.145 1.059.266a1.181 1.181 0 0 1 .094.973Z"/><path fill="#000004" d="M10.178 13.908a1.645 1.645 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.945 1.945 0 0 1-.642 1.223a2.361 2.361 0 0 1-1.448.37h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a4.931 4.931 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.207 3.207 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.568 2.568 0 0 0-2.035-.732H7.7Zm8.126-9.342h1.6l-.387 1.962h1.421a2.767 2.767 0 0 1 1.85.468a1.548 1.548 0 0 1 .305 1.516l-.667 3.434H16.89l.635-3.265a.886.886 0 0 0-.08-.76a1.121 1.121 0 0 0-.8-.2H15.37l-.822 4.228h-1.6Zm8.34 3.126a1.645 1.645 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.945 1.945 0 0 1-.642 1.223A2.361 2.361 0 0 1 22 17h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a4.931 4.931 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.207 3.207 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.568 2.568 0 0 0-2.035-.732h-3.092Z"/></svg>' ;

let mysql_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="55" height="60" viewBox="0 0 512 349"><path fill="#00758F" d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026c8.51-22.792 14.456-47.63 17.839-74.513h18.71c-8.045 43.766-18.656 75.57-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525c5.711 0 10.314-1.583 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505h19.406ZM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34c-.695-33.433-2.62-64.871-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176c-2.218 28.282-3.614 59.72-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346h24.485Z"/><path fill="#F29111" d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485c-4.683 1.387-9.836 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909Zm-93.88.172c10.957 0 20.92 2.932 29.894 8.775l-4.558 10.157c-7.679-3.264-15.25-4.903-22.716-4.903c-6.058 0-10.726 1.458-13.98 4.392c-3.272 2.908-5.296 6.65-5.296 11.212c0 7.01 4.994 13.089 14.215 18.225a816.32 816.32 0 0 1 9.031 5.011l.688.387l.345.194l.689.387l.344.194l.688.388c6.98 3.935 13.548 7.691 13.548 7.691c9.22 6.545 13.816 13.523 13.816 25.016c0 10.037-3.678 18.276-11.01 24.723c-7.337 6.418-17.194 9.636-29.538 9.636c-11.545 0-22.734-3.704-33.572-11.05l5.07-10.166c9.327 4.675 17.767 7.01 25.346 7.01c7.108 0 12.672-1.587 16.697-4.721c4.017-3.157 6.424-7.56 6.424-13.143c0-7.027-4.888-13.034-13.855-18.073a897.982 897.982 0 0 1-8.395-4.697l-.687-.389c-1.262-.713-2.533-1.435-3.778-2.142l-.675-.384c-6.055-3.444-11.29-6.453-11.29-6.453c-8.964-6.557-13.459-13.592-13.459-25.184c0-9.587 3.352-17.336 10.046-23.231c6.71-5.908 15.367-8.862 25.968-8.862Zm175.895 1.584v103.788h37.238v14.558h-56.124V199.266h18.886Zm57.93 103.833v2.46h-4.094v12.04h-3.13v-12.04h-4.253v-2.46h11.478Zm7.56 0l3.931 9.884l3.611-9.884h4.437v14.5h-2.95v-11.035l-4.11 11.035h-2.127l-4.117-11.035h-.158v11.035h-2.791v-14.5h4.275ZM350.57 212.064c-18.066 0-27.104 14.91-27.104 44.71c0 17.07 2.395 29.448 7.176 37.163c4.428 7.14 11.363 10.703 20.806 10.703c18.066 0 27.103-15.026 27.103-45.064c0-16.831-2.395-29.103-7.17-36.822c-4.433-7.124-11.365-10.69-20.81-10.69Z"/><path fill="#00758F" d="M303.218 7.333c5.993-14.726 26.948-3.574 35.08 1.57c1.993 1.287 4.279 4.006 6.564 5.011c3.565.14 7.127.419 10.698.568c6.698 1.574 12.972 2.86 18.25 5.866c24.528 14.445 40.495 29.165 55.19 53.479c3.14 5.15 4.709 10.723 7.274 16.296c3.56 8.307 7.56 17.027 11.692 24.882c1.85 3.724 3.281 7.865 5.85 11.01c1.003 1.438 3.852 1.862 5.555 2.721c4.708 2.437 10.412 4.287 14.84 7.147c8.269 5.156 16.264 11.3 23.532 17.59c2.709 2.428 4.555 5.865 7.136 8.433v1.296c-2.291.703-4.574 1.423-6.859 2c-4.991 1.282-9.412.992-14.254 2.275c-2.992.868-6.707 2.013-9.845 2.304l.29.292c1.846 5.275 11.834 9.565 16.402 12.72c5.548 4.004 10.689 8.86 14.827 14.437c1.429 1.423 2.858 2.718 4.28 4.137c.994 1.438 1.274 3.298 2.28 4.58v.434c-1.114-.393-1.915-1.143-2.674-1.927l-.453-.473c-.453-.47-.91-.932-1.431-1.313c-3.148-2.15-6.274-4.722-9.422-6.721c-5.412-3.434-11.689-5.427-17.246-8.874c-3.142-2.001-6.137-4.28-9.132-6.57c-2.715-2.007-5.705-5.861-7.411-8.721c-1.005-1.58-1.143-3.437-2.291-4.58c.205-1.909 1.954-2.476 3.719-2.942l.406-.107c.609-.158 1.205-.316 1.725-.525c7.414-3.148 16.253-4.29 27.667-4.004c-.43-2.866-7.562-6.437-9.839-8.153c-4.57-3.294-9.409-6.731-14.257-9.729c-2.569-1.57-6.996-2.716-9.842-3.999c-3.851-1.574-12.41-3.147-14.544-6.145c-3.625-4.726-6.229-10.363-8.757-16.057l-.688-1.554a803.85 803.85 0 0 0-.69-1.553c-2.988-6.857-6.7-14.006-9.695-21.027c-1.566-3.425-2.285-6.431-4-9.716c-10.407-20.158-25.81-37.035-44.485-48.904c-6.137-3.862-12.98-7.436-20.534-9.865c-4.281-1.293-9.419-.578-13.98-1.57h-3.002c-2.562-.722-4.701-3.438-6.7-4.87c-4.415-2.998-8.837-5.011-14.117-7.15c-1.85-.858-7.133-2.856-8.977-1.283c-1.142.287-1.721.718-2.002 1.864c-1.136 1.71-.137 4.286.57 5.863c2.142 4.57 5.134 7.286 7.85 11.148c2.416 3.425 5.417 7.287 7.13 11.011c3.696 8.005 5.417 16.874 8.842 24.878c1.27 3.01 3.279 6.435 5.128 9.15c1.567 2.155 4.416 3.713 5.278 6.441c1.718 2.86-2.572 12.297-3.565 15.294c-3.715 11.727-2.995 28.028 1.283 38.193l.228.536l.228.543c1.562 3.723 3.234 7.732 7.387 8.773c.286-.284 0-.135.567-.284c1.005-7.868 1.288-15.445 4-21.601c1.567-3.849 4.696-6.57 6.841-9.712c1.43.856 1.43 3.437 2.282 5.145c1.856 4.43 3.849 9.287 6.137 13.73c4.696 9.15 9.98 18.021 15.967 26.025c2.005 2.859 4.85 6.006 7.416 8.581c1.143.997 2.423 1.573 3.282 2.856h.28v.432c-4.278-1.577-6.99-6.003-10.402-8.587c-6.424-4.857-14.117-12.151-18.545-19.15c-1.852-4.018-3.854-7.869-5.85-11.867v-.289c-.853 1.142-.567 2.276-.994 4.004c-1.852 7.145-.426 15.296-6.843 17.866c-7.274 3.01-12.7-4.857-14.977-8.432c-7.276-11.866-9.269-31.884-4.138-48.043c1.14-3.577 1.295-7.867 3.285-10.723c-.43-2.582-2.42-3.288-3.571-4.87c-1.996-2.704-3.705-5.854-5.268-8.857c-3.002-5.866-5.138-12.875-7.417-19.166c-1.002-2.569-1.289-5.148-2.288-7.58c-1.704-3.712-4.845-7.436-7.268-10.72c-3.281-4.72-12.837-13.868-8.985-23.168Zm46.772 28.015c.381.382.841.716 1.317 1.045l.574.394c.765.53 1.506 1.088 1.96 1.848c.72 1.006.854 1.999 1.716 3.007c0 3.437-.996 5.722-3.007 7.146c0 0-.137.15-.278.29c-1.14-2.291-2.139-4.57-3.287-6.859c-1.414-1.998-3.413-3.583-4.565-5.866h-.277v-.287c1.721-.425 3.428-.718 5.847-.718Z"/></svg>';

let vscode_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 32"><path fill="#0065a9" d="m29.01 5.03l-5.766-2.776a1.742 1.742 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.748 1.748 0 0 0-.99-1.575Z"/><path fill="#007acc" d="m29.01 26.97l-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.749 1.749 0 0 1-.99 1.57Z"/><path fill="#1f9cf0" d="M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724a1.744 1.744 0 0 1 1.989-.339l5.765 2.772A1.748 1.748 0 0 1 30 6.6v18.8a1.748 1.748 0 0 1-.991 1.576Z"/></svg>';

let git_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 108"><path fill="#2F2707" d="M152.984 37.214c-5.597 0-9.765 2.748-9.765 9.362c0 4.983 2.747 8.443 9.463 8.443c5.693 0 9.56-3.355 9.56-8.65c0-6-3.46-9.155-9.258-9.155Zm-11.19 46.701c-1.325 1.625-2.645 3.353-2.645 5.39c0 4.067 5.186 5.291 12.31 5.291c5.9 0 13.938-.414 13.938-5.9c0-3.261-3.867-3.462-8.753-3.768l-14.85-1.013Zm30.113-46.394c1.828 2.34 3.764 5.597 3.764 10.276c0 11.292-8.851 17.904-21.667 17.904c-3.259 0-6.209-.406-8.038-.914l-3.359 5.39l9.969.61c17.602 1.122 27.975 1.632 27.975 15.157c0 11.702-10.272 18.311-27.975 18.311c-18.413 0-25.433-4.68-25.433-12.716c0-4.578 2.035-7.015 5.596-10.378c-3.358-1.419-4.476-3.961-4.476-6.71c0-2.24 1.118-4.273 2.952-6.208c1.83-1.93 3.864-3.865 6.306-6.103c-4.984-2.442-8.75-7.732-8.75-15.262c0-11.697 7.733-19.731 23.295-19.731c4.376 0 7.022.402 9.362 1.017h19.84v8.644l-9.361.713Zm27.259-18.487c-5.8 0-9.157-3.36-9.157-9.161c0-5.793 3.356-8.95 9.157-8.95c5.9 0 9.258 3.157 9.258 8.95c0 5.801-3.357 9.161-9.258 9.161ZM186.04 80.171v-8.033l5.19-.71c1.425-.205 1.627-.509 1.627-2.038V39.48c0-1.116-.304-1.832-1.325-2.134l-5.492-1.935l1.118-8.238h21.061V69.39c0 1.63.098 1.833 1.629 2.039l5.188.71v8.032H186.04Zm69.227-3.944c-4.376 2.135-10.785 4.068-16.586 4.068c-12.106 0-16.682-4.878-16.682-16.38V37.264c0-.61 0-1.017-.817-1.017h-7.12V27.19c8.955-1.02 12.513-5.496 13.632-16.585h9.666v14.45c0 .71 0 1.017.815 1.017h14.343v10.173H237.36v24.313c0 6.002 1.426 8.34 6.917 8.34c2.852 0 5.799-.71 8.24-1.626l2.75 8.954"/><path fill="#DE4C36" d="M104.529 49.53L58.013 3.017a6.86 6.86 0 0 0-9.703 0l-9.659 9.66l12.253 12.252a8.145 8.145 0 0 1 8.383 1.953a8.157 8.157 0 0 1 1.936 8.434L73.03 47.125c2.857-.984 6.154-.347 8.435 1.938a8.161 8.161 0 0 1 0 11.545a8.164 8.164 0 0 1-13.324-8.88L57.129 40.716l-.001 28.98a8.248 8.248 0 0 1 2.159 1.544a8.164 8.164 0 0 1 0 11.547c-3.19 3.19-8.36 3.19-11.545 0a8.164 8.164 0 0 1 2.672-13.328v-29.25a8.064 8.064 0 0 1-2.672-1.782c-2.416-2.413-2.997-5.958-1.759-8.925l-12.078-12.08L2.011 49.314a6.863 6.863 0 0 0 0 9.706l46.516 46.514a6.862 6.862 0 0 0 9.703 0l46.299-46.297a6.866 6.866 0 0 0 0-9.707"/></svg>';

let ps_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 250"><rect width="256" height="249.6" fill="#001E36" rx="42.5"/><path fill="#31A8FF" d="M57.644 175.035V65.297c0-.8.344-1.202 1.031-1.202l1.087-.003l1.858-.02l2.582-.051l8.65-.183l9.275-.172c3.262-.056 6.496-.086 9.702-.086c8.7 0 16.027 1.088 21.982 3.263a38.139 38.139 0 0 1 14.34 8.758a33.596 33.596 0 0 1 7.814 12.108a40.17 40.17 0 0 1 2.405 13.824c0 9.161-2.119 16.717-6.355 22.669a35.902 35.902 0 0 1-16.6 12.756l-.573.21c-6.973 2.601-14.695 3.541-23.164 3.6l-1.316.004l-1.953-.01l-.985-.014l-1.098-.026l-.662-.026l-.402-.021l-.989-.036l-1.209-.025l-1.82-.013l-.405-.001v34.263a1.366 1.366 0 0 1-1.546 1.546H58.847c-.803 0-1.203-.456-1.203-1.374ZM80.84 84.703v35.792a53.16 53.16 0 0 0 4.12.172h5.668a40.277 40.277 0 0 0 11.533-1.727l.746-.233a18.515 18.515 0 0 0 8.759-5.668c2.152-2.538 3.267-6.035 3.344-10.492l.005-.499c.09-3.322-.774-6.6-2.491-9.445a16.015 16.015 0 0 0-7.47-6.097a31.829 31.829 0 0 0-12.537-2.146l-2.178.006l-1.374.012l-1.311.017l-1.85.036l-1.35.038l-.701.026l-.937.044l-.798.049l-.455.036l-.393.038l-.173.02l-.157.021Zm123.93 29.284a40.153 40.153 0 0 0-9.458-3.442l-.76-.164a54.267 54.267 0 0 0-11.009-1.363l-.926-.011a22.21 22.21 0 0 0-6.44.773a5.786 5.786 0 0 0-3.35 2.146a5.408 5.408 0 0 0-.858 2.92a4.56 4.56 0 0 0 1.03 2.747a11.689 11.689 0 0 0 3.235 2.637l.372.197a71.946 71.946 0 0 0 7.556 3.52a74.88 74.88 0 0 1 16.4 7.814a24.941 24.941 0 0 1 8.416 8.845a23.581 23.581 0 0 1 2.49 10.99a24.686 24.686 0 0 1-4.122 14.169a27.11 27.11 0 0 1-11.936 9.53c-5.037 2.214-11.223 3.357-18.557 3.432l-.762.004a69.87 69.87 0 0 1-13.556-1.188l-.956-.186a46.302 46.302 0 0 1-10.905-3.435a2.224 2.224 0 0 1-1.202-1.89v-18.718a1.01 1.01 0 0 1 .43-.945a.833.833 0 0 1 .944.086a45.879 45.879 0 0 0 13.223 5.238a54.53 54.53 0 0 0 12.537 1.632c4.006 0 6.954-.516 8.844-1.546a4.855 4.855 0 0 0 2.834-4.465c0-1.486-.859-2.918-2.576-4.293c-.72-.576-1.753-1.203-3.097-1.88l-.643-.316l-.686-.323l-.36-.164l-.754-.334a66.85 66.85 0 0 0-.393-.17l-.82-.344l-.427-.175l-.886-.355l-.46-.18l-.953-.367l-.997-.373a63.13 63.13 0 0 1-15.199-7.728a26.21 26.21 0 0 1-8.071-9.016a23.682 23.682 0 0 1-2.49-10.905a24.62 24.62 0 0 1 3.606-12.88c2.7-4.27 6.576-7.67 11.163-9.788c5.037-2.517 11.333-3.777 18.89-3.779a83.61 83.61 0 0 1 13.224.945a34.663 34.663 0 0 1 9.206 2.49c.473.136.854.485 1.03.945c.117.419.174.852.172 1.288v17.345c.025.41-.172.803-.515 1.03a1.66 1.66 0 0 1-1.478 0Z"/></svg>';



figma_div.html(figma_svg);
html_div.html(html_svg);
css_div.html(css_svg);
js_div.html(js_svg);
php_div.html(php_svg);
mysql_div.html(mysql_svg);
vscode_div.html(vscode_svg);
git_div.html(git_svg);
ps_div.html(ps_svg);
