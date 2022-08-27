// const rootStyles = window.getComputedStyle
// (document.documentElement)

// if (rootStyles.getPropertyValue('--book-cover-width-large') != null && 
// rootStyles.getPropertyValue('--book-cover-width-large') !== '') {
// ready()
// } else {
//     document.getElementById('main-css').addEventListener('load', ready)
// }

// function ready() {
    const coverWidth = 200;
    const coverAspectRatio = 0.72;
    const coverHeight = coverWidth / coverAspectRatio
    FilePond.registerPlugin (
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode,
    )

    FilePond.setOptions({
        stylePanelAspectRatio: 1 / coverAspectRatio,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight
    })

    FilePond.parse(document.body);
// }