import CtaBanner from './CtaBanner';

// Shared "Argo Elevate members" CTA — used on Home and Pricing
function ArgoElevateCta() {
  return (
    <CtaBanner
      label="Partner Access"
      title="Argo Pilates Elevate member? You're already in."
      description="Complimentary 24/7 Alpha Gym access for active Argo Pilates 'Elevate' members. No fees, no contract — access stays valid while your Elevate membership is active."
      actions={[{ label: 'Ask About Elevate Access', href: '/contact', primary: true }]}
    />
  );
}

export default ArgoElevateCta;
