import { useState, FormEvent } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Loader2, CheckCircle } from 'lucide-react';

interface LeadFormProps {
  source: string;
  compact?: boolean;
}

export default function LeadForm({ source, compact = false }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    comments: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const courses = [
    'AWS DevOps Engineer',
    'Azure Cloud Architect',
    'Multi-Cloud DevOps',
    'Full Stack Developer',
    'DevOps Engineering',
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError('');
    setLoading(true);

    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        source,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        course: '',
        comments: '',
      });
    } catch (err) {
      console.error(err);
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 p-8 rounded-xl text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-900">
          Submitted Successfully!
        </h3>
        <p className="text-green-700">
          Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl shadow-2xl ${
        compact ? 'p-6' : 'p-8'
      }`}
    >
      <h3 className="text-2xl font-bold mb-6">Book a Free Demo</h3>

      <div className="space-y-4">
        <input
          required
          placeholder="Your Name *"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          required
          placeholder="Email *"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full p-3 border rounded-lg"
        />

        <input
          required
          placeholder="Mobile Number *"
          pattern="[0-9]{10}"
          value={formData.mobile}
          onChange={(e) =>
            setFormData({ ...formData, mobile: e.target.value })
          }
          className="w-full p-3 border rounded-lg"
        />

        <select
          required
          value={formData.course}
          onChange={(e) =>
            setFormData({ ...formData, course: e.target.value })
          }
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select Course *</option>
          {courses.map((course) => (
            <option key={course}>{course}</option>
          ))}
        </select>

        {!compact && (
          <textarea
            placeholder="Comments (Optional)"
            rows={3}
            value={formData.comments}
            onChange={(e) =>
              setFormData({ ...formData, comments: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
          />
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold flex justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </form>
  );
}
