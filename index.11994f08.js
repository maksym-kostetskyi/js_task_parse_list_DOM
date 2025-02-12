var a=document.getElementsByTagName("ul")[0].getElementsByTagName("li");function t(a){return+a.slice(1).split(",").join("")}Array.from(a).sort(function(a,e){var r=t(a.dataset.salary),n=t(e.dataset.salary);return r>n?-1:r<n?1:0}).forEach(function(a){return a.parentNode.appendChild(a)}),Array.from(a).map(function(a){return Object.assign({},a.dataset)});
//# sourceMappingURL=index.11994f08.js.map
