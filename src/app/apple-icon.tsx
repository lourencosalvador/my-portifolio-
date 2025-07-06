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
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
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