# learning-nodes
it is a record of learning nodes





使用 Node.js + Express 框架建立一個靜態網頁
什麼是Express框架，Express 是 Node.js 環境下提供的一個輕量後端框架，自由度極高，透過豐富的 HTTP 工具，能幫助快速開發後端應用程式。
跟其他有完整 MVC 架構的框架相比，Express 其實鬆散（或者說自由）很多，許多地方並沒有強制規範，都只是按照前人的方法或者是慣例來實踐，十個人可能會有十種不同的寫法。

Install Expres in macos
Step1. 初始化 npm，過程都按確定，最後會在資料夾中建立一個 package.json 檔
$ sudo npm init
Step2. 安裝 Express
安裝完成還是會自動存到 package.json：
$ sudo npm install express 


MVC 基本架構

MVC（Model–view–controller）：是一種應用程式架構，透過將程式碼拆成分成模型（Model）、視圖（View）和控制器（Controller）三個部分，並透過路由系統，建立整個應用程式的設計模式。







EJS 語法是透過 <% %> 符號，和 PHP 語法其實很類似，語法又可分為三種

<% JavaScript 程式碼 %>

<%-  %> 會經過解析然後印出來，用於引入 HTML 內容

<%=  %> 會直接印出原始碼，用於輸出資料，避免被解析成語法，可視為一種 XSS 防禦
