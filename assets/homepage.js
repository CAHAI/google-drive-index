let len = window.drive_names.length;
let html = "";

for (let i = 0; i < len; i++) {
   html +=
      `<a href="/${i}:/" style="color: white;" class="list-group-item list-group-item-action">
         <svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqa" x1="24" x2="24" y1="6.708" y2="14.977" gradientUnits="userSpaceOnUse">
               <stop offset="0" stop-color="#eba600"></stop>
               <stop offset="1" stop-color="#c28200"></stop>
            </linearGradient>
            <path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa)" d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30 c0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"></path>
            <linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqb" x1="24" x2="24" y1="10.854" y2="40.983" gradientUnits="userSpaceOnUse">
               <stop offset="0" stop-color="#ffd869"></stop>
               <stop offset="1" stop-color="#fec52b"></stop>
            </linearGradient>
            <path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb)" d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26	c0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"></path>
         </svg> ${window.drive_names[i]}
      </a>`;
}

$('#n_drives').html(len);
$('#list').html(html);
