import Head from 'next/head';

const pricingTiers = [
  {
    title: 'Free Trial',
    price: '$0',
    features: [
      'GPT-4 access (limited)',
      '10 AI requests',
      'No login required initially',
      'Explore GitHub integrations'
    ],
    cta: 'Start for Free'
  },
  {
    title: 'Developer Plan',
    price: '$10/mo',
    features: [
      'Unlimited GPT-3.5 + GPT-4 support',
      'File editing + commits',
      'Mind map visualizations',
      'Syntax enforcement & linting'
    ],
    cta: 'Upgrade to Developer'
  },
  {
    title: 'Pro Builder',
    price: '$29/mo',
    features: [
      'Multi-repo projects',
      'Auto-deploy integrations',
      'Priority GPT access',
      'Extended limits & AI usage'
    ],
    cta: 'Go Pro'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Pricing – Git-Smart-AI</title>
      </Head>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, scalable pricing</h1>
        <p className="text-gray-600 mb-12">Start free. Upgrade when you're ready to scale.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <div key={tier.title} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{tier.title}</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">{tier.price}</p>
            <ul className="mb-6 space-y-2">
              {tier.features.map((f, i) => (
                <li key={i} className="text-gray-700">• {f}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}