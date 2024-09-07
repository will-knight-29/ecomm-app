'use client'

import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from '@/app/actions'

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="rounded-l-none" disabled={pending}>
            {pending ? 'Subscribing...' : 'Subscribe'}
        </Button>
    )
}

export default function Newsletter() {
    return (
        <section className="bg-stone-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-stone-800 mb-4 text-center">Stay Connected</h2>
                <p className="text-center mb-6">Subscribe to our newsletter for exclusive offers and updates.</p>
                <form action={subscribeToNewsletter} className="max-w-md mx-auto flex">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="rounded-r-none flex-grow"
                        required
                    />
                    <SubmitButton/>
                </form>
            </div>
        </section>
    )
}