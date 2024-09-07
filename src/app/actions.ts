'use server'

export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get('email')

    // Here you would typically send this to your API or database
    console.log(`Subscribing email: ${email}`)

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success or error message
    return { message: 'Successfully subscribed to newsletter!' }
}