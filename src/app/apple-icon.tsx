import { ImageResponse } from 'next/og'
import { DATA } from '@/data/resume'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
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