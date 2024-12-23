import PublishCards from '@/app/components/PublishComponents/PublishCards'
import PublishDesc from '@/app/components/PublishComponents/PublishDesc'
import PublishHeader from '@/app/components/PublishComponents/PublishHeader'
import React from 'react'

const PublishPage = () => {
  return (
    <div className='overflow-hidden'>
        <PublishHeader/>
        <PublishDesc/>
        <PublishCards/>
    </div>
  )
}

export default PublishPage