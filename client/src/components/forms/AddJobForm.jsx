import React from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import { StateSelectDropdown } from './StateSelectDropdown';

export default function AddJobForm() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  
                  <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="name"
                        />
                    </div>
                    <TextInput
                    id="street"
                    type="text"
                    placeholder="street name"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="city"
                            value="city"
                        />
                    </div>
                    <TextInput
                    id="city"
                    type="text"
                    placeholder="city"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-4">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="state"
                            value="state"
                        />
                    </div>
                    <TextInput
                    id="state"
                    type="text"
                    placeholder="state"
                    required={true}
                    />
                </div>

                  <div className="col-span-6">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="description"
                        />
                    </div>
                    <TextInput
                    id="description"
                    type="text"
                    placeholder="description"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="status"
                            value="status"
                        />
                    </div>
                    <TextInput
                    id="status"
                    type="text"
                    placeholder="status"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                    <Label
                        htmlFor="status"
                        value="status"
                    />
                </div>
                    <TextInput
                    id="status"
                    type="text"
                    placeholder="status"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="pickupDate"
                            value="pickupDate"
                        />
                    </div>
                    <TextInput
                    id="pickupDate"
                    type="text"
                    required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                  <Label
                            htmlFor="cost"
                            value="cost"
                        />
                    </div>
                    <TextInput
                    id="cost"
                    type="text"
                    required={true}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="invoice"
                            value="invoice"
                        />
                    </div>
                    <TextInput
                    id="invoice"
                    type="text"
                    required={true}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                          <Label
                            htmlFor="category"
                            value="category"
                        />
                    </div>
                    <TextInput
                    id="category"
                    type="text"
                    required={true}
                    />
                </div>


                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Button type="submit">Add Job</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
