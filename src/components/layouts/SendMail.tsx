import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted with data:', data)
    try {
      // Here you would typically make an API call to send the email
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log('Showing success toast')
      toast.success('Message sent successfully!', {
        duration: 4000,
        position: 'top-right',
        style: {
          zIndex: 9999,
        },
      })
      reset()
    } catch (error) {
      console.error('Error showing toast:', error)
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        position: 'top-right',
        style: {
          zIndex: 9999,
        },
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <div>
          <Input
            {...register('name')}
            type="text"
            placeholder="Name"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register('email')}
            type="email"
            placeholder="Email"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register('subject')}
            type="text"
            placeholder="Subject"
            className={errors.subject ? 'border-red-500' : ''}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <Textarea
            {...register('message')}
            placeholder="Message"
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}

export default SendMail