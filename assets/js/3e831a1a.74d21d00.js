"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9492],{6645:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=i(7462),n=i(3366),a=(i(7294),i(3905)),o=["components"],p={id:"receipt-verifier",title:"Receipt Verifier Service",sidebar_label:"Receipt verifier service"},l=void 0,s={unversionedId:"receipt-verifier",id:"receipt-verifier",title:"Receipt Verifier Service",description:"This page explains how to set up a receipt verifier service.",source:"@site/docs/receipt-verifier.md",sourceDirName:".",slug:"/receipt-verifier",permalink:"/docs/receipt-verifier",draft:!1,editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/receipt-verifier.md",tags:[],version:"current",frontMatter:{id:"receipt-verifier",title:"Receipt Verifier Service",sidebar_label:"Receipt verifier service"}},c={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Receipt verifier service overview",id:"receipt-verifier-service-overview",level:2},{value:"Use our publicly available receipt verifier",id:"use-our-publicly-available-receipt-verifier",level:2},{value:"Install the receipt verifier service package",id:"install-the-receipt-verifier-service-package",level:2},{value:"Update your Web Monetization meta tag",id:"update-your-web-monetization-meta-tag",level:2},{value:"Web Monetization revshare generator",id:"web-monetization-revshare-generator",level:2},{value:"Set up a monetizationprogress event listener",id:"set-up-a-monetizationprogress-event-listener",level:2}],v={toc:u},m="wrapper";function h(e){var t=e.components,i=(0,n.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page explains how to set up a receipt verifier service."),(0,a.kt)("p",null,"As more creators adopt Web Monetization to serve premium and/or ad-free content, there\u2019s a greater need for reliable payment verification. Web Monetization browser events, like ",(0,a.kt)("inlineCode",{parentName:"p"},"monetizationstart"),", are helpful indicators of payment, but can be spoofed by savvy users to access exclusive content without paying."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://interledger.org/rfcs/0039-stream-receipts/"},"Interledger STREAM receipts")," provide payment recipients (such as web monetized site owners) with verifiable proofs of payment. As a payment recipient, you can verify STREAM receipts yourself by setting up your own receipt verifier service or by using a third-party service, like ",(0,a.kt)("a",{parentName:"p",href:"#use-our-publicly-available-receipt-verifier"},"the one we provide"),". You don't need to run your own Interledger connector or SPSP server to verify STREAM receipts."),(0,a.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,a.kt)("p",null,"Your Web Monetization receiver (the digital entity receiving payments) must be set up to generate Interledger STREAM receipts. No action is required on your part. GateHub and Uphold already support receipts."),(0,a.kt)("h2",{id:"receipt-verifier-service-overview"},"Receipt verifier service overview"),(0,a.kt)("p",null,"The receipt verifier service acts as a proxy between the Web Monetization sender and receiver."),(0,a.kt)("p",null,"Before a payment is made, the WM sender sends a query to the WM receiver. The query passes through the receipt verifier service, which adds a receipt secret and receipt nonce."),(0,a.kt)("p",null,"When the WM receiver receives money from the payment, it generates a receipt (which includes a signature generated using the receipt secret) and sends the receipt to the WM sender."),(0,a.kt)("p",null,"The site takes the receipt from the Web Monetization events, then submits the receipt to its backend. The backend then submits the receipt to the receipt verifier service so the receipt verifier service can confirm the payment (as only it and the WM receiver know the receipt secret). The receipt verifier service must verify the receipt before accepting the amount as paid."),(0,a.kt)("h2",{id:"use-our-publicly-available-receipt-verifier"},"Use our publicly available receipt verifier"),(0,a.kt)("p",null,"If you don't want to set up your own receipt verifier service, you can use ours!"),(0,a.kt)("p",null,"Review the following sections below and use ",(0,a.kt)("inlineCode",{parentName:"p"},"https://webmonetization.org/api/receipts")," as the receipt verifier service's URL."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#update-your-web-monetization-meta-tag"},"Update your Web Monetization meta tag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#set-up-a-monetizationprogress-event-listener"},"Set up a monetizationprogress event listener"))),(0,a.kt)("h2",{id:"install-the-receipt-verifier-service-package"},"Install the receipt verifier service package"),(0,a.kt)("p",null,"You can get the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coilhq/receipt-verifier"},"receipt verifier service package")," or run the receipt verifier service as a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coilhq/receipt-verifier/tree/main/config/base"},"Kubernetes service"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"This example shows Coil's implementation of the receipt verifier service package, which requires Redis. You can write a different implementation that doesn't rely on Redis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install\nnpm run-script build\nsudo docker run -p 6379:6379 -d redis\nnpm start\n\ngit clone https://github.com/coilhq/receipt-verifier.git\ncd receipt-verifier\n")),(0,a.kt)("h2",{id:"update-your-web-monetization-meta-tag"},"Update your Web Monetization meta tag"),(0,a.kt)("p",null,"Typically, a Web Monetization meta tag looks something like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'<meta name=\u201cmonetization" content="$wallet.example/alice">')),(0,a.kt)("p",null,"For queries from the WM sender to be proxied by the receipt verifier service to your payment pointer:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"URI-encode your payment pointer. See ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"},"encodeURIComponent()")," on MDN Web Docs if you need help."),(0,a.kt)("li",{parentName:"ol"},"Add your pointer to the path of the receipt verifier service's URL."),(0,a.kt)("li",{parentName:"ol"},"Update your meta tag's ",(0,a.kt)("inlineCode",{parentName:"li"},"content")," to be this new value.")),(0,a.kt)("p",null,"For example, if your payment pointer is ",(0,a.kt)("inlineCode",{parentName:"p"},"$wallet.example/alice")," and your receipt verifier service\u2019s URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://receipt-verifier.example"),", then you\u2019ll set your meta tag\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," to either of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://receipt-verifier.example/%24wallet.example%2Falice")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$receipt-verifier.example/%24wallet.example%2Falice"))),(0,a.kt)("p",null,"If you're using our publicly available receipt verifier service, then you'll set your meta tag's ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," to either of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://webmonetization.org/api/receipts/%24wallet.example%2Falice")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$webmonetization.org/api/receipts/%24wallet.example%2Falice"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can create your meta tag with the ",(0,a.kt)("a",{parentName:"p",href:"/link-tag"},"Meta Tag Generator")," if using the publicly available receipt verifier service.")),(0,a.kt)("h2",{id:"web-monetization-revshare-generator"},"Web Monetization revshare generator"),(0,a.kt)("p",null,"If you used the ",(0,a.kt)("a",{parentName:"p",href:"/prob-revshare"},"Web Monetization revshare generator")," to create a meta tag for ",(0,a.kt)("a",{parentName:"p",href:"/docs/probabilistic-rev-sharing"},"probabilistic revenue sharing"),", follow the same instructions as above: URI-encode your revshare payment pointer and put it in the path of the receipt verifier service\u2019s URL."),(0,a.kt)("p",null,"For example, if your meta tag looks like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'<meta name="monetization" content="$webmonetization.org/api/revshare/pay/W1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0">')),(0,a.kt)("p",null,"And your receipt verifier service\u2019s URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://receipt-verifier.example"),", then you\u2019ll set your meta tag\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," to either of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://receipt-verifier.example/%24webmonetization.org%2Fapi%2Frevshare%2Fpay%2FW1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$receipt-verifier.example/ %24webmonetization.org%2Fapi%2Frevshare%2Fpay%2FW1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0"))),(0,a.kt)("h2",{id:"set-up-a-monetizationprogress-event-listener"},"Set up a monetizationprogress event listener"),(0,a.kt)("p",null,"When a WM sender receives a receipt, the sender notifies the user agent of the successful payment by submitting a ",(0,a.kt)("inlineCode",{parentName:"p"},"monetizationprogress")," event containing a receipt."),(0,a.kt)("p",null,"Add the following client-side code to your website to listen for a ",(0,a.kt)("inlineCode",{parentName:"p"},"monetizationprogress")," event containing a ",(0,a.kt)("inlineCode",{parentName:"p"},"receipt"),". When a receipt exists, your website will verify the receipt in the event listener to confirm the payment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n  \x3c!-- This should be set to .... --\x3e\n  <meta name=\"monetization\" content=\"https://receipt-verifier.example/%24wallet.example%2Falice\" />\n  <script>\n    if (document.monetization) {\n        document.monetization.addEventListener('monetizationprogress', event => {\n            // A payment has been received.\n\n            // Connect to your site\u2019s backend to validate the payment. This does NOT connect directly to the receipt verifier.\n            const res = await fetch('/verifyReceipt', {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                receipt: event.detail.receipt\n              })\n            })\n        })\n    }\n  <\/script>\n</head>\n")),(0,a.kt)("p",null,"Your backend can send the receipt to the receipt verifier service\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"/verify")," endpoint."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're using our publicly available receipt verifier service, the verify endpoint is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://webmonetization.org/api/receipts/verify"),".")),(0,a.kt)("p",null,"Here\u2019s an example for an Express.js server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"app.post('/verifyReceipt', async (req, res) => {\n  const resp = await fetch('https://receipt-verifier.example/verify', {\n    method: 'POST',\n    body: req.body.receipt\n  }\n  const { amount } = await resp.json()\n  console.log('Received ' + amount)\n  // backend logic for new paid amount\n})\n")),(0,a.kt)("p",null,"The receipt verifier service can confirm the payment, as only the receipt verifier service and the WM receiver know the receipt secret. The receipt verifier service must verify the receipt before accepting the receipt amount as paid. When accepted as paid, the site backend can serve exclusive content or any other perks you\u2019ve set up."))}h.isMDXComponent=!0}}]);