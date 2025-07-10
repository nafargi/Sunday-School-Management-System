import React, { useState } from 'react';
import childrenData from '../../data/emergency.json'; 
import {PhoneIcon} from '@heroicons/react/24/outline'; 
const EmergencyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChild, setSelectedChild] = useState(null);
  const [activeTab, setActiveTab] = useState('emergency-contacts');

  const filteredChildren = childrenData.filter(child =>
    child.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDetails = (child) => {
    setSelectedChild(child);
  };

  const closeDetails = () => {
    setSelectedChild(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow mt-6">
      <div className="mb-6">
        <h1 className="text-2xl  text-gray-800 mb-2">Emergency Contacts & Medical Info</h1>
        <p className="text-gray-600 mb-4">Quick access to critical information</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search children..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Photo</th>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Name</th>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Age Group</th>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Emergency Contact</th>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Phone</th>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Allergies</th>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Medical Notes</th>
              <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredChildren.map((child) => (
              <tr key={child.id}>
                <td className="py-4 px-4">
                  <img 
                    src={child.photo} 
                    alt={child.name} 
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => e.target.src = '/images/default-profile.jpg'}
                  />
                </td>
                <td className="py-4 px-4 text-sm text-gray-800">{child.name}</td>
                <td className="py-4 px-4 text-sm text-gray-500">{child.age_group}</td>
                <td className="py-4 px-4 text-sm text-gray-800">
                  {child.basic_info.emergency_contact.name} ({child.basic_info.emergency_contact.relation})
                </td>
                <td className="py-4 px-4 text-sm text-gray-800">
                  <div className="flex items-center">
                    <span className="mr-1"> 
                        <PhoneIcon className="w-4 h-4 text-blue-500" />
                    </span>
                    {child.basic_info.emergency_contact.phone}
                  </div>
                </td>
                <td className="py-4 px-4 text-sm">
                  {child.basic_info.allergies[0] === "None" ? (
                    <span className="text-gray-500">None</span>
                  ) : (
                    <span className="font-semibold text-red-600">{child.basic_info.allergies.join(', ')}</span>
                  )}
                </td>
                <td className="py-4 px-4 text-sm text-gray-800">{child.basic_info.medical_notes}</td>
                <td className="py-4 px-4 text-sm">
                  <button
                    onClick={() => openDetails(child)}
                    className="text-gray-600 hover:text-gray-800 border border-gray-200 p-2 rounded-sm hover:bg-gray-50 transition duration-200"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Dialog */}
      {selectedChild && (
        <div className="fixed inset-0 bg-[#f706ff08] bg-opacity-50 flex items-center justify-center p-4 z-30">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto mt-10 mx-auto">
            {/* Dialog Header */}
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-xl  text-gray-800">
                Emergency Information
              </h2>
              <p className="text-gray-600">
                Detailed emergency contact and medical information for {selectedChild.name}
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className=" inline-block px-6 ">
                <button
                  onClick={() => setActiveTab('emergency-contacts')}
                  className={`py-2  px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'emergency-contacts' ? 'border-[#7C3BED] rounded-lg bg-[#7C3BED] text-[#ffffff]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Emergency Contacts
                </button>
                <button
                  onClick={() => setActiveTab('medical-information')}
                  className={`py-2 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'medical-information' ? 'border-[#7C3BED] rounded-lg bg-[#7C3BED] text-[#ffffff]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Medical Information
                </button>
                <button
                  onClick={() => setActiveTab('authorizations')}
                  className={`py-2 px-6 text-center border-b-2  font-medium text-sm ${activeTab === 'authorizations' ? 'border-[#7C3BED] rounded-lg bg-[#7C3BED] text-[#ffffff]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Authorizations
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'emergency-contacts' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Primary Contact</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.emergency_contacts.primary.name} ({selectedChild.detailed_info.emergency_contacts.primary.relation})</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Primary Phone</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.emergency_contacts.primary.primary_phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Alternative Phone</p>
                      <p className="text-gray-900">
                        {selectedChild.detailed_info.emergency_contacts.primary.secondary_phone || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.emergency_contacts.primary.email}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.emergency_contacts.primary.address}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Secondary Contact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.emergency_contacts.secondary.name} ({selectedChild.detailed_info.emergency_contacts.secondary.relation})</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Primary Phone</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.emergency_contacts.secondary.primary_phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Alternative Phone</p>
                      <p className="text-gray-900">
                        {selectedChild.detailed_info.emergency_contacts.secondary.secondary_phone || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.emergency_contacts.secondary.email}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'medical-information' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Medical Information</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Allergies</p>
                      <p className="text-gray-900">
                        {selectedChild.detailed_info.medical_information.allergies.join(', ') || 'None'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Medications</p>
                      <p className="text-gray-900">
                        {selectedChild.detailed_info.medical_information.medications.join(', ') || 'None'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Medical Conditions</p>
                      <p className="text-gray-900">
                        {selectedChild.detailed_info.medical_information.conditions.join(', ') || 'None'}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Doctor Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Doctor Name</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.medical_information.doctor.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Doctor Phone</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.medical_information.doctor.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Insurance</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.medical_information.doctor.insurance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="text-gray-900">{selectedChild.detailed_info.medical_information.last_updated}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'authorizations' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Authorizations</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Hospital Authorization</p>
                      <p className="text-gray-900">
                        {selectedChild.detailed_info.authorizations.hospital_transport ? 'Authorized' : 'Not authorized'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Emergency Treatment</p>
                      <p className="text-gray-900">
                        {selectedChild.detailed_info.authorizations.emergency_treatment ? 'Authorized' : 'Not authorized'}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Authorized for Pickup</h3>
                  <ul className="space-y-2">
                    {selectedChild.detailed_info.authorizations.authorized_pickup.map((person, index) => (
                      <li key={index} className="text-gray-900">{person}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Dialog Footer */}
            <div className="border-t border-gray-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={closeDetails}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyList;