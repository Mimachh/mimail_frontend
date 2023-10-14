export function CloudinaryScriptLoader() {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.async = true;
  
      script.onload = resolve;
  
      document.body.appendChild(script);
    });
}

