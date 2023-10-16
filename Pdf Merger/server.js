const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "upload/" });
const {mergePdfs} = require('./merge');
const { AsyncResource } = require("async_hooks");
app.use('/static',express.static('public'))
const port = 7000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "template/index.html"));
});
app.post("/merge", upload.array("pdfs", 2), async (req, res, next)=> {
  console.log(req.files);
  let d=await mergePdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
  res.redirect(`http://localhost:7000/static/${d}.pdf`);
//   res.send({ data: req.files });
});

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`);
});
