import React from 'react';
import AddJobForm from '../ui/forms/AddJobForm'

export default function AddJob() {
    return (
        <>
            <div className="flex-row flex justify-between">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Add Job</h1>
            </div>
            <AddJobForm />
        </>
    )
}