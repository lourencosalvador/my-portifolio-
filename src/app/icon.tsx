import { ImageResponse } from 'next/og'
import { DATA } from '@/data/resume'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          fontWeight: 'bold',
        }}
      >
        {DATA.initials}
      </div>
    ),
    {
      ...size,
    }
  )
} 