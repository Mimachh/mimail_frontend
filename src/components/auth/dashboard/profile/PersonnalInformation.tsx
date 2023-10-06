

interface Props {
  user: any;
}

function PersonalInformation(user: Props) {
    const userData = user.user;
    return (

                      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                        <div>
                          <h2 className="text-base font-semibold leading-7">Personal Information</h2>
                          <p className="mt-1 text-sm leading-6 text-gray-400">
                            Use a permanent address where you can receive mail.
                          </p>
                        </div>
        
                        <form className="md:col-span-2">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div className="col-span-full flex items-center gap-x-8">
                              <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                              />
                              <div>
                                <button
                                  type="button"
                                  className="rounded-md bg-customYellow px-3 py-2 text-sm font-semibold shadow-sm hover:bg-customYellow-foreground"
                                >
                                  Change avatar
                                </button>
                                <p className="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                              </div>
                            </div>
        
                            <div className="sm:col-span-3">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                First name 
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="customProfileFormInputText"
                                  value={userData.last_name}
                                />
                              </div>
                            </div>
        
                            <div className="sm:col-span-3">
                              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-customBlack">
                                Last name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="customProfileFormInputText"
                                  value={userData.name}
                                />
                              </div>
                            </div>
        
                            <div className="col-span-full">
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-customBlack">
                                Email address
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  className="customProfileFormInputText"
                                  value={userData.email}
                                />
                              </div>
                            </div>
                          </div>
        
                          <div className="mt-8 flex">
                            <button
                              type="submit"
                              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
    )
}

export default PersonalInformation
