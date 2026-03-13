function handleFileSelect (evt) {
  const files = evt.target.files; for (var i = 0, f; f = files[i]; i++) {
    if (!f.type.match('image.*')) { continue }
    const reader = new FileReader(); reader.onload = (function (theFile) { return function (e) { $('body').css({ 'background-image': 'url(' + e.target.result + ')' }); const span = document.createElement('span'); span.innerHTML = ['<img style="width:70px;height:40px;" class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join(''); document.getElementById('list').insertBefore(span, null); localStorage.setItem('textureZ', e.target.result) } })(f); reader.readAsDataURL(f)
  }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false); if (localStorage.img) { var span = document.createElement('span'); span.innerHTML += ['<img style="width:70px;height:40px;" class="thumb" src="', localStorage.img, '" title="test"/>'].join(''); document.getElementById('list').insertBefore(span, null) }
function handleFileSelect2 (evt) {
  const files2 = evt.target.files; for (var i = 0, f; f = files2[i]; i++) {
    if (!f.type.match('image.*')) { continue }
    const reader = new FileReader(); reader.onload = (function (theFile) { return function (e) { $('#center').css({ 'background-image': 'url(' + e.target.result + ')' }); const span = document.createElement('span'); span.innerHTML = ['<img style="width:70px;height:40px;" class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join(''); document.getElementById('list').insertBefore(span, null); localStorage.setItem('logotype', e.target.result) } })(f); reader.readAsDataURL(f)
  }
}
document.getElementById('files2').addEventListener('change', handleFileSelect2, false); if (localStorage.img) { var span = document.createElement('span'); span.innerHTML += ['<img style="width:70px;height:40px;" class="thumb" src="', localStorage.img, '" title="test"/>'].join(''); document.getElementById('list2').insertBefore(span, null) }
function handleFileSelect3 (evt) {
  const files3 = evt.target.files; for (var i = 0, f; f = files3[i]; i++) {
    if (!f.type.match('text.*')) { continue }
    const reader = new FileReader(); reader.onload = (function (theFile) { return function (e) { const span = document.createElement('span'); span.innerHTML = ['<img style="width:70px;height:40px;" class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join(''); document.getElementById('list').insertBefore(span, null); localStorage.setItem('kernelZ', e.target.result); location.reload() } })(f); reader.readAsDataURL(f)
  }
}
document.getElementById('files3').addEventListener('change', handleFileSelect3, false); if (localStorage.img) { var span = document.createElement('span'); span.innerHTML += ['<img style="width:70px;height:40px;" class="thumb" src="', localStorage.img, '" title="test"/>'].join(''); document.getElementById('list2').insertBefore(span, null) }
