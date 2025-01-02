import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='display-1'>404</h1>
            <h2>Page Not Found</h2>
            <p>
              We are sorry, the page you are looking for could not be found.
            </p>
            <Link href='/'>
              <a className='btn btn-primary'>Back to Home</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
