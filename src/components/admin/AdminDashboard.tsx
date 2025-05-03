
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ImagePlus, Save, FileText, Users, Edit } from "lucide-react";
import { Input } from "@/components/ui/input";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('images');
  const { toast } = useToast();
  const [logoText, setLogoText] = useState("SC");
  const [logoSubtext, setLogoSubtext] = useState("AYDIN");
  
  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    window.location.reload();
  };
  
  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your changes have been successfully saved",
      variant: "default",
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-syria-green-700">Admin Dashboard</h1>
        <Button variant="ghost" onClick={handleLogout}>Logout</Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="images" className="flex items-center">
            <ImagePlus className="mr-2 h-4 w-4" />
            Images
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Team
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="images">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-syria-green-600 mb-4">Logo Settings</h2>
              <div className="border rounded-md p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-40 h-40 rounded-full bg-syria-green-50 flex items-center justify-center border-4 border-syria-green-200">
                    <div className="text-center">
                      <div className="text-syria-green-600 font-bold text-4xl">{logoText}</div>
                      <div className="text-syria-green-500 text-xs mt-1">{logoSubtext}</div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Logo Main Text</label>
                      <Input 
                        value={logoText} 
                        onChange={(e) => setLogoText(e.target.value)}
                        className="max-w-xs"
                        maxLength={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Logo Subtext</label>
                      <Input 
                        value={logoSubtext} 
                        onChange={(e) => setLogoSubtext(e.target.value)}
                        className="max-w-xs"
                        maxLength={10}
                      />
                    </div>
                    <div>
                      <Button className="bg-syria-green-500 hover:bg-syria-green-600">
                        <Edit className="mr-2 h-4 w-4" />
                        Update Logo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-syria-green-600 mb-4">Banner Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="border rounded-md p-4">
                    <div className="aspect-video bg-gray-100 mb-2 rounded flex items-center justify-center">
                      <ImagePlus className="h-8 w-8 text-gray-400" />
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Change Image
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-syria-green-600 mb-4">Event Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="border rounded-md p-4">
                    <div className="aspect-video bg-gray-100 mb-2 rounded flex items-center justify-center">
                      <ImagePlus className="h-8 w-8 text-gray-400" />
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Change Image
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="bg-syria-green-500 hover:bg-syria-green-600" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="content">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-syria-green-600 mb-4">Home Page Content</h2>
              <textarea
                className="w-full min-h-[150px] p-4 border rounded-md"
                placeholder="Edit home page content here..."
              ></textarea>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-syria-green-600 mb-4">About Us Content</h2>
              <textarea
                className="w-full min-h-[150px] p-4 border rounded-md"
                placeholder="Edit about us content here..."
              ></textarea>
            </div>
            
            <Button className="bg-syria-green-500 hover:bg-syria-green-600" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="team">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-syria-green-600 mb-4">Team Members</h2>
              <div className="border rounded-md divide-y">
                {['General Administration', 'Social Media Managers', 'Event Organizers', 'Technical Team'].map((role, index) => (
                  <div key={index} className="p-4 flex justify-between items-center">
                    <span>{role}</span>
                    <Button size="sm" variant="outline">Edit Members</Button>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="bg-syria-green-500 hover:bg-syria-green-600" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
