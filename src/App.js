import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <p>Hello World</p>
      <p className='h1'>Hello World</p>
      <h1 className='display-1'>Hello World</h1>
      <h1 className='display-5'>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Beatae veritatis minus, facere neque eum aperiam tempore eaque officiis vero quam 
        molestiae voluptas officia similique aliquid itaque architecto numquam. Aut, adipisci?</p>
      <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Beatae veritatis minus, facere neque eum aperiam tempore eaque officiis vero quam 
        molestiae voluptas officia similique aliquid itaque architecto numquam. Aut, adipisci?</p>

      <h3 className='display-5 text-center'>Hello World</h3>
      <p className='text-capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Beatae veritatis minus, facere neque eum aperiam tempore eaque officiis vero quam 
        molestiae voluptas officia similique aliquid itaque architecto numquam. Aut, adipisci?</p>
      <h6 className='fs-2'>Hello World</h6>
      <p className='fw-bold'>Hello World</p>
      <p className='fst-italic'>Hello World</p>
      <p className='text-decoration-underline'>Hello World</p>
      <a href=" " className='text-decoration-none'>Hello</a>
    </>
  );
}

export default App;
