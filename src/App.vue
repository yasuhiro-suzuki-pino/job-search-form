// src/App.vue
<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-YOUR-ID"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    // Google Tag Manager
    const script = document.createElement('script')
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-YOUR-ID');`
    document.head.appendChild(script)

    // Optimize Next
    const optimizeScript = document.createElement('script')
    optimizeScript.innerHTML = `(function(p,r,o,j,e,c,t,g){ p['_'+t]={};g=r.createElement('script');g.src='https://www.googletagmanager.com/gtm.js?id=GTM-'+t;r[o].prepend(g); g=r.createElement('style');g.innerText='.'+e+t+'{visibility:hidden!important}';r[o].prepend(g); r[o][j].add(e+t);setTimeout(function(){if(r[o][j].contains(e+t)){r[o][j].remove(e+t);p['_'+t]=0}},c) })(window,document,'documentElement','classList','loading',2000,'WJVRWLC6')`
    document.head.appendChild(optimizeScript)
  },
  watch: {
    $route() {
      // ページ遷移時にOptimize Nextスクリプトを再実行
      const optimizeScript = document.createElement('script')
      optimizeScript.innerHTML = `(function(p,r,o,j,e,c,t,g){ p['_'+t]={};g=r.createElement('script');g.src='https://www.googletagmanager.com/gtm.js?id=GTM-'+t;r[o].prepend(g); g=r.createElement('style');g.innerText='.'+e+t+'{visibility:hidden!important}';r[o].prepend(g); r[o][j].add(e+t);setTimeout(function(){if(r[o][j].contains(e+t)){r[o][j].remove(e+t);p['_'+t]=0}},c) })(window,document,'documentElement','classList','loading',2000,'WJVRWLC6')`
      document.head.appendChild(optimizeScript)
    }
  }
}
</script>