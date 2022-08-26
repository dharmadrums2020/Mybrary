FilePond.registerPlugin (
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeMode: 'contain',
    imageResizeTargetWidth: 100,
    // imageResizeTargetHeight: 150
})

FilePond.parse(document.body);