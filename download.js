function download(content, mimeType, filename){
    var a = document.createElement('a')
    var blob = new Blob([content], {type: mimeType})
    var url = URL.createObjectURL(blob)
    a.setAttribute('href', url)
    a.setAttribute('download', filename)
    a.click()
  }