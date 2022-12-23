<script defer>
    var styles=` 
        body{background: #C5DAE8 !important;} 
        input{background:white !important; padding: 5px !important; border-radius: 3px !important;} 
        .print-center-container{ margin:auto !important;} 
         .print-center-container tbody {background: white;}
        .print-center-container tbody tr td.top_links p{background: #C5DAE8 !important; }  
        td.main-header h1{margin: 50px 0px 0px 574px !important; border-radius: 0 15px 0 0;}
        td.main-header{border-radius: 30px 0 0 0 !important; background-position-y: -5px;}
        #docLibItem, #opc_content , div#quote > td {background: white;}
        .print-center-container:first-of-type tbody:first-of-type tr:last-of-type td:first div:first-of-type {border-left: 55px solid #0076D4 !important;}
          .print-center-container:first tbody tr[3] {background:  #C5DAE8 !important;}
          .sidebar-nav gray{margin-top: -4px !important;}
          .sidebar-right > tr td[2] {margin-top: -4px !important;}
          .description table tbody tr td {background: white !important;}
          table.sidebar-products tbody tr td {background: white !important;}
          div#quote td {background: white !important;}
          .print-center-container:first-of-type tbody:first-of-type tr:first-of-type td:first-of-type .user.product_image.padding-box + table tbody tr td {background: white !important;}
          table.sidebar-products tbody {background: #FEB53D !important;}
    `; 
        var styleSheet = document.createElement("style");
        styleSheet.innerText = styles; 
        document.head.appendChild(styleSheet); 
        console.log("this script functions correctly 3");


            var leftTd = document.querySelector('td[rowspan="4"][width="35"]');
    var topTdLeft = document.querySelector('td[rowspan="0"][width="35"]');
    var topTdRight = document.querySelector('td[colspan="3"][class="top_links"]');

       leftTd.setAttribute("rowspan", 0);
       leftTd.style.backgroundColor = "#C5DAE8";
        topTdRight.style.backgroundColor = "#C5DAE8";
</script>


  leftTd.setAttribute("rowspan", 0);
 var topTdLeft = document.querySelector('td[rowspan="0"][width="35"]')
topTdLeft.style.background = "#C5DAE8 ";
var topTdRight = document.querySelector('td[colspan="3"][class="top_links"]');
topTdRight.style.background = "#C5DAE8 ";
        topTdLeft.style.backgroundColor = "#C5DAE8";
//    const leftTd = document.querySelector(".print-center-container tbody tr:first-of-type td:first-of-type")
 //   leftTd.setAttribute("rowspan", "0");
//    .print-center-container tbody tr:last-of-type td div {border-left: 55px solid #0076D4 !important;}
