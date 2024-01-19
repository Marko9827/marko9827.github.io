<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editor</title>
    <link rel="stylesheet" href="https://cdn.eronelit.com/node_modules/monaco-editor@0.45.0/min/vs/editor/editor.main.css" />
    <style>

* {
    box-sizing:border-box;
    margin:0px;
    padding:0px;
}
iframe{
    background: white;
}
body{
    background:#333;
}
iframe#preview-container {
    border: 0px !important;
    border-left:2px solid #333 !important;
}
        body {
            margin: 0;
            display: flex;
            height: 100vh;
        }
        #editor-container {
            flex: 1;
        }
        #preview-container {
            flex: 1;
            border: 1px solid #ccc;
        }
        @media screen and (max-width: 1000px){
    div#editor-container,.monaco-editor {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 50vh !important;
}

iframe#preview-container {
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    width: -webkit-fill-available;
    height: 50vh;
    border-top:  solid white !important;
}

.monaco-editor.no-user-select.showUnused.showDeprecated.vs-dark {}
}

 
    </style>
</head>
<body>
    <div id="editor-container"></div>
    <iframe id="preview-container"></iframe>

    <script src="https://cdn.eronelit.com/node_modules/monaco-editor@0.45.0/min/vs/loader.js"></script>
    <script>
        require.config({ paths: { 'vs': 'https://cdn.eronelit.com/node_modules/monaco-editor@0.45.0/min/vs' } });

        require(['vs/editor/editor.main'], function () {
            // Your existing Monaco Editor initialization code
            var editor = monaco.editor.create(document.getElementById('editor-container'), {
                value: `Your html,css,js code here. \n 
                <!--  <style> your css </style> -->\n
                <!--  <script> script </script> -->`,
                language: 'html',
                theme: 'vs-dark'
            });

            // Your existing live preview update code
            function updatePreview() {
                var previewFrame = document.getElementById('preview-container');
                var previewContent = `<!DOCTYPE html>
<html>

<body>
${editor.getValue()}
</body>

</html>
 `;
                previewFrame.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewContent);
            }

            editor.onDidChangeModelContent(function () {
                updatePreview();
            });

            // Initial preview update
            updatePreview();
        });
    </script>
</body>
</html>