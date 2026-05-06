import { User, Users } from "lucide-react";

export default function InfoCards() {
  return (
    <section className=" py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1 */}
        <div className=" p-8 md:p-10 border border-gray-100 rounded-sm">
          <User className="w-6 h-6 text-black mb-6" />

          <h2 className="text-2xl font-bold text-black mb-4">
            Who it is for
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Lovyn is designed for individuals seeking authentic companionship,
            whether that translates to platonic partnership, deep friendship, or
            romantic involvement without the pressure of traditional dating norms.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-sm">
          <Users className="w-6 h-6 text-black mb-6" />

          <h2 className="text-2xl font-bold text-black mb-4">
            Inclusive partnerships
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We recognize that connection takes many forms. Our platform is built
            to support a wide spectrum of relationship structures and identities,
            providing a sophisticated space for all seeking meaningful bonds.
          </p>
        </div>

      </div>
    </section>
  );
}