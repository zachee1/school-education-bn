export const sendEmailTemplate = (role: string) => {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Assign IT</title>
        <style>
          body {
            font-family: sans-serif;
            background-color: #f0f4f8;
            margin: 0;
            padding: 0;
          }
          img{
              max-width: 100%;
              max-height: 10rem;;   
          }
          .container {
            max-width: 28rem;
            padding: 1rem;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 0.375rem;
            text-align: center;
            margin: 0 auto; 
          }
      
          .header h1 {
            font-weight: bold;
            font-size: 1.875rem;
          }
         
          .main-content {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: flex-start;
            padding: 1.25rem 0;
          }
      
          .main-content img {
            flex-shrink: 0;
            margin: 0 auto 1.25rem;
            max-width: 15rem;
            object-fit: cover;
            width: 33%;
          }
      
          .main-content div {
            flex: 1;
          }
      
          .main-content h2 {
            font-weight: bold;
            font-size: 1.25rem;
          }
      
          .main-content p {
            text-align: left;
          }
      
          .button {
            margin-left: 0.625rem;
            margin-top: 0.625rem;
            background-color: #3490dc;
            color: #fff;
            padding: 0.5rem 1rem;
            font-size: 1.125rem;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
          }
      
          .footer {
            background-color: #ccc;
            color: #666;
            padding: 1.25rem 0;
          }
        </style>
      </head>
      <body>
        <div class="min-h-screen flex flex-col items-center justify-center">
          <div class="container">
            <header class="header">
              <img src="https://res.cloudinary.com/dyjy5ilv1/image/upload/v1698304896/image_p4wjvs.png"/>
            </header>
      
            <main class="main-content">
              <img src="https://res.cloudinary.com/dyjy5ilv1/image/upload/v1698304896/image_720_htzntq.png" alt="image" width="240"/>
              <div>
                <h2>Account Created Successfully</h2>
      
                <p>Congratulations! Your account has been successfully created on Assign IT as a ${role}. Click the button below to get started:</p>
              </div>
            </main>
      
            <footer class="footer">
              <p>&copy; 2023 Assign IT</p>
            </footer>
          </div>
        </div>
      </body>
      </html>`;
};
