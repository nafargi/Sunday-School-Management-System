import React from 'react';
import { useParams, useNavigate,useLocation} from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ChildDetailView = () => {
 

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the child data from navigation state
  const child = location.state?.childData;

  if (!child) {
    return (
      <div className="p-4 text-center text-gray-500">
        Child not found
      </div>
    );
  }
  
 

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="mr-4 p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">{child.name}</h1>
      </div>

      {/* Basic info section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          {child.age} years old • {child.ageGroup}
        </h2>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Emergency Contact</h4>
              <p className="text-gray-600 mb-4">{child.emergencyContact}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">123 Main St. Anytown, USA</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Allergies</h4>
                  <p className="text-gray-600">None</p>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Basic Info</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-500 mb-1">Personal Information</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="text-gray-700">{child.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Age</p>
                      <p className="text-gray-700">{child.age} years</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-500 mb-1">Contact Information</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Parents/Guardians</p>
                      <p className="text-gray-700">Mary & John Thompson</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-700">{child.emergencyContact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit button */}
      <div className="border-t border-gray-200 pt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ChildDetailView;