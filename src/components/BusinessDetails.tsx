import { Building2, BriefcaseBusiness, MapPin, Phone, BadgeCheck, IndianRupee } from "lucide-react";

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const DetailItem = ({ icon, label, value }: DetailItemProps) => (
  <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft border border-border hover:shadow-card transition-shadow duration-300">
    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
      <p className="text-foreground font-medium">{value}</p>
    </div>
  </div>
);

const BusinessDetails = () => {
  const details = [
    { icon: <Building2 size={20} />, label: "Business Name", value: "K.K. Tours and Travels" },
    { icon: <BriefcaseBusiness size={20} />, label: "Business Type", value: "Travel & Tours Agency" },
    { icon: <MapPin size={20} />, label: "Location", value: "Gondal, Rajkot, Ahmedabad" },
    { icon: <BadgeCheck size={20} />, label: "Speciality", value: "Family Travel & Tour Services" },
    { icon: <IndianRupee size={20} />, label: "Annual Earnings", value: "Approx. ₹10,00,000" },
    { icon: <Phone size={20} />, label: "Contact", value: "+91 78198 51008" },
  ];

  return (
    <section id="business" className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-gold">✦</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Business Details
          </h2>
          <p className="text-muted-foreground">Professional information and business profile</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DetailItem {...detail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDetails;
