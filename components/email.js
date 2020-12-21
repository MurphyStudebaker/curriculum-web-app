export default function Email() {
    return (
      <form className='mt-4 w-full' name="contact" action="/" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex flex-col items-center w-full px-4'>
        <p className='w-full text-lg'>
          <input className='px-8 py-6 rounded-lg w-full mono' type="email" name="email" placeholder='Your Email' id="youremail" />
        </p>
        <p className='w-full text-lg'>
          <button className='mt-2 bg-transparent text-white py-6 px-6 border-4 border-white rounded-lg w-full mono hover:shadow-xl' type="submit">
          Get notified when we add new curriculum!
          </button>
        </p>

        </div>
      </form>
    )
  }