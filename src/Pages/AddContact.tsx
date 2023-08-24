import React from 'react'

const AddContact = () => {
    return (
        <div className=''>
            <section className="p-6 ">
                <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-xl mt-10">
                    <h2 className="w-full text-3xl font-bold leadi text-center">Contact Page</h2>
                    <div>

                        <input id="name" type="text" placeholder="First Name" className="w-full p-2 input input-bordered" />
                    </div>
                    <div>

                        <input id="email" type="text" placeholder="Last Name" className="w-full p-2 input input-bordered" />
                    </div>
                    <div className='flex'>
                        <div className='mt-5 font-bold'>
                            Status:
                        </div>

                        <div className='ml-10'>
                        <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Active</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                </label>
                            </div>


                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Inactive</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                </label>
                            </div>
                           
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold btn btn-outline btn-success">Save Contact</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddContact