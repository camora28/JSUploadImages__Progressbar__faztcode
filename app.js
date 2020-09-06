const imagePreview = document.getElementById("img-preview");
const imageUploader = document.getElementById("img-uploader");

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/camora28/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "sloch0n0";

imageUploader.addEventListener("change", async (e) => {
    event.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_present", CLOUDINARY_UPLOAD_PRESET);

    const res = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
        "content-type": "multipart/form-data",
        },
    });
    console.log(res);
});
