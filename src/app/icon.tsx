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
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundImage: `url(${DATA.avatarUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    ),
    {
      ...size,
    }
  )
} 