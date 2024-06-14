
export default function Contact () {

    const config = {
        email : 'nabeerasheed@gmail.com',
        phone: '+918610013528'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-20 text-white'>
        <div className='flex flex-col items-center'>
             <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5 text-xl'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}