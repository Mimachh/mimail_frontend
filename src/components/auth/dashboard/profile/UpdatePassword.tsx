import { Form } from '@/components/ui/form'
import { PasswordChangeValues } from '@/lib/auth/dashboard/typePasswordChangeForm';
import React from 'react'
import { useForm } from 'react-hook-form';

interface Props {}

function UpdatePassword(props: Props) {
    const {} = props

    const passwordChangeForm = useForm<PasswordChangeValues>({
      defaultValues: {
        current_password: "",
        password: "",
        confirm_password: "",
      },
    });

    const onSubmitPersonnalInformationForm = async (values: PasswordChangeValues) => {
      console.log(values);

      // Vérifier que les nouveaux mots de passe correspondent
      // Si oui on envoie les data : si le current est bon, on remplace par l'ancien
      // La route sera protégée par auth et par la même policy
    }


    return (
      <Form {...passwordChangeForm}>
        <form onSubmit={passwordChangeForm.handleSubmit(onSubmitPersonnalInformationForm)} className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-white">
                Current password
              </label>
              <div className="mt-2">
                <input
                  id="current-password"
                  name="current_password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-white">
                New password
              </label>
              <div className="mt-2">
                <input
                  id="new-password"
                  name="new_password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-white">
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
      </Form>

    )
}

export default UpdatePassword
