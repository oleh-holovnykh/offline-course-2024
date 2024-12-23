import React from "react";
import { Module, PracticeClass, Retreat } from "../types/events";
import { createSchedule } from '../helpers/сreateSchedule';

interface Props {
  modules: Module[];
  practices: PracticeClass[];
  retreats: Retreat[];
}

export const Schedule: React.FC<Props> = ({ modules, practices, retreats }) => {
  const groups = createSchedule(modules, practices, retreats);
  
  console.log('111',groups);
  return <div>
    <div className='flex justify-center items-center'>
      <div className='w-[350px] text-gray-600'>
        {
        groups.map((group, i) => {
          const startDate = new Date(group.startDate);
          const endDate = new Date(group.endDate);
          let dateStr = '';
          let groupTitle = '';

          if (group.type === 'class') {
            dateStr = `${startDate.getDate().toString().padStart(2, '0')}.${(startDate.getMonth() + 1).toString().padStart(2, '0')}`;
          } else {
            dateStr = `🗓️ ${startDate.getDate().toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}.${(endDate.getMonth() + 1).toString().padStart(2, '0')}`;
          }

          if ('title' in group) {
            groupTitle = ` ${group.title}`;
          } else {
            groupTitle = ' Група практики'
          }

          if (group.type === 'module') {
            groupTitle = `"${groupTitle.trimStart()}"`
          }
          
          return <div key={i} className='whitespace-normal'>
            <b>{`${dateStr}`}</b>
            {'module' in group && ` Модуль ${group.module} `}
            {'module' in group && <br/>}
            {groupTitle}
            {('class' in group && group.class % 2 === 0 || group.type === 'retreat') && <><br />{'\u00a0'}</>}
          </div>
        })
        }
      </div>
    </div>  
  </div>;
};
