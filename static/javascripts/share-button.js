class ShareButton extends HTMLElement{static get observedAttributes(){return['href','text']}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(ShareButton.template.cloneNode(!0));let a=this.shadowRoot;this.shareBtn=a.getElementById('share-btn'),this.overlay=a.getElementById('overlay'),this.url=a.getElementById('url'),this.copy=a.getElementById('copy'),this.mailto=a.getElementById('mailto'),this.android=a.getElementById('android')}static get template(){if(this.fragment)return this.fragment;const a=document.createDocumentFragment();let b=document.createElement('style');b.innerHTML=`:host {
display: inline-flex;
--share-button-background-color: initial;
--share-button-border: 2px outset buttonface;
--share-button-appearance: button;
--share-button-border-radius: initial;
--share-button-color: initial;
--overlay-background-color: white;
--overlay-background-border: 1px solid #ccc;
min-width: 25px;
min-height: 25px;
}

.visible {
display: block !important;
}

#share-btn {
-webkit-appearance: var(--share-button-appearance);
-moz-appearance: var(--share-button-appearance);
appearance: var(--share-button-appearance);
border: var(--share-button-border);
border-radius: var(--share-button-border-radius);
color: var(--share-button-color);
width: 100%;
height: inherit;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-shrink: 1;
text-transform: inherit;
font: inherit;
}

#overlay {
background-color: var(--overlay-background-color);
display: none;
padding: 1em;
top: 0;
margin: auto;
left: 0;
right: 0;
max-width: 300px;
}

#overlay.visible {
display: inline-block !important;
border: var(--overlay-background-border);
position: fixed;
}

#services {
padding-left: 0;
}

#copy {
display: none;
}

#copy.visible {
display: block !important;
}

#copy {
margin: 0 0 0 0.5em;
}

:host([copy="disabled"]) #copy {
display:none;
}

:host([copy="disabled"]) #copy.visible {
display:none !important;
}

#mailto {
margin: 0 0 0 0.5em;
}

:host([mailto="disabled"]) #mailto {
display:none;
}

#android {
display: none;
margin: 0 0 0 0.5em;
}

#android.visible {
display: block !important;
}

:host([android="disabled"]) #android {
display:none;
}

:host([android="disabled"]) #android.visible {
display:none !important;
}

div.buttons {
overflow-x: auto;
display: flex;
flex-direction: row;
}

slot[name=buttons]::slotted(*) {
min-height: 1em;
margin-top: 1em;
}

slot[name=clipboard]::slotted(*) {
width: 100%;
height: 100%;
}

slot[name=android]::slotted(*) {
width: 100%;
height: 100%;
}

slot[name=mailto]::slotted(*) {
width: 100%;
height: 100%;
}

slot[name=buttons]:empty {
display: none;
}

#urlbar {
display: flex;
flex-direction: row;
align-items: center;
}

#url {
width: 100%;
padding: 0.5em 0.5em;
}`;const c=document.createElement('button');c.id='share-btn',c.innerHTML='<slot><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 16c-.8 0-1.4.4-2 .8l-7-4v-1.5l7-4c.5.4 1.2.7 2 .7 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3v.7l-7 4C7.5 9.4 6.8 9 6 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8l7.2 4.2v.6c0 1.6 1.2 3 2.8 3 1.6 0 3-1.4 3-3s-1.4-3-3-3z"/></svg></slot>',c.setAttribute('aria-lable','Share URL');const d=document.createElement('div');return d.id='overlay',d.innerHTML=`
<div id="urlbar">
<input type="url" id="url" />
<button id="copy" aria-label="Copy to clipboard"><slot name="clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 1H4C3 1 2 2 2 3v14h2V3h12V1zm3 4H8C7 5 6 6 6 7v14c0 1 1 2 2 2h11c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 16H8V7h11v14z"/></svg></slot></button>
<button id="mailto" aria-lable="Mail to"><slot name="mailto"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg></slot></button>
<button id="android" aria-label="Share on Android"><slot name="android"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 18c0 .6.5 1 1 1h1v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V19h2v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V19h1c.6 0 1-.5 1-1V8H6v10zM3.5 8C2.7 8 2 8.7 2 9.5v7c0 .8.7 1.5 1.5 1.5S5 17.3 5 16.5v-7C5 8.7 4.3 8 3.5 8zm17 0c-.8 0-1.5.7-1.5 1.5v7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7c0-.8-.7-1.5-1.5-1.5zm-5-5.8L16.8 1c.2-.3.2-.6 0-.8-.2-.2-.5-.2-.7 0l-1.3 1.4C13.7 1.2 13 1 12 1c-1 0-2 .2-2.7.6L7.8 0H7v1l1.5 1C7 3.2 6 5 6 7h12c0-2-1-3.8-2.5-4.8zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg></slot></button>
</div>
<div class="buttons">
<slot name="buttons"></slot>
</div>`,a.appendChild(b),a.appendChild(c),a.appendChild(d),this.fragment=a,a}connectedCallback(){let a=this.shadowRoot;const b=window.getComputedStyle(this.shareBtn),c=window.getComputedStyle(this),d=c.getPropertyValue('--share-button-background-color');if(this.style.setProperty('--share-button-background-color',d||b.backgroundColor),this.shareBtn.style.backgroundColor='var(--share-button-background-color)',this.addEventListener('click',(f)=>{return f.preventDefault(),this.toggleOverlay(),!1},!1),this.addEventListener('keypress',()=>this.toggleOverlay()),document.documentElement.addEventListener('click',(f)=>{f.target!=a.host&&this.hide()},!0),this.copy.addEventListener('click',(f)=>{f.stopPropagation(),f.preventDefault(),f.cancelBubble=!0,this.copyUrl()}),this.mailto.addEventListener('click',(f)=>{f.stopPropagation(),f.preventDefault(),f.cancelBubble=!0,this.mailUrl()}),this.android.addEventListener('click',()=>{if(!!navigator.share)navigator.share({title:this.text,url:this.href}).then(()=>{this.dispatchEvent(new Event('share-url',{bubbles:!0,composed:!0}))});else{const g=encodeURIComponent('https://twitter.com/intent/tweet');window.location=`intent:#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=${encodeURIComponent(this.url.value)};S.android.intent.extra.SUBJECT=${document.title};S.browser_fallback_url=${g}?text=${encodeURIComponent(document.title)}&${encodeURIComponent(window.location)};end`,this.dispatchEvent(new Event('share-url',{bubbles:!0,composed:!0}))}}),0<navigator.userAgent.indexOf('Android')&&this.android.classList.add('visible'),this.url.addEventListener('click',(f)=>{return f.stopPropagation(),f.preventDefault(),f.cancelBubble=!0,!1},!1),this.url.addEventListener('keypress',(f)=>{f.stopPropagation(),f.cancelBubble=!0,13==f.charCode&&(window.location=f.currentTarget.value)}),window.addEventListener('hashchange',()=>this.updateUrl(window.location)),window.addEventListener('popstate',()=>this.updateUrl(window.location)),!1==!!this.href&&(this.href=window.location),this.updateUrl(this.href),!1==!!this.text){const f=document.getElementsByTagName('title'),g=f?f.innerText:void 0,h=document.querySelector('meta[name=description]'),i=h?h.content:void 0;this.text=i||g}document.queryCommandSupported&&document.queryCommandSupported('copy')&&this.copy.classList.toggle('visible')}attributeChangedCallback(a,b,c){b!=c&&(this[a]=c)}get href(){return this.getAttribute('href')}set href(a){a?(this.updateUrl(a),this.setAttribute('href',a)):(this.updateUrl(window.location),this.removeAttribute('href'))}get text(){return this.getAttribute('text')}set text(a){a?(this.updateText(a),this.setAttribute('text',a)):(this.updateText(),this.removeAttribute('text'))}updateUrl(a){this.url.value=a}updateText(){}mailUrl(){window.open(`mailto:?body=${encodeURIComponent(this.href)}&subject=${encodeURIComponent(this.text)}`),this.dispatchEvent(new Event('mail-url',{bubbles:!0,composed:!0}))}copyUrl(){window.getSelection().removeAllRanges();const a=document.createRange();a.selectNode(this.url),window.getSelection().addRange(a);try{const b=document.execCommand('copy');return window.getSelection().removeAllRanges(),this.toggleOverlay(),this.dispatchEvent(new Event('copy-url',{bubbles:!0,composed:!0})),b}catch(b){console.error(b)}return!1}hide(){this.overlay.classList.remove('visible')}show(){this.overlay.classList.add('visible')}toggleOverlay(){this.overlay.classList.toggle('visible')}}customElements.define('share-button',ShareButton);