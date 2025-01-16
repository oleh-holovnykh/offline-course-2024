import React from "react";

export const ScheduleHTML: React.FC = () => {
  return (
    <div className="text-left w-max mt-2 px-4 mx-auto text-gray-600" style={{ width: '450px', wordWrap: 'break-word' }}>
      <div>
        <b>🗓️13-15.01 Модуль 2: Дитячо-батьківські відносини</b>
        <div className='ml-4'>
        <p>вечірня група (17:30 - 20:30): 28.01, 11.02 </p>
        <p>ранкова група (10:00 - 13:00): 29.01, 12.02 </p>
        </div>
      </div>

      <div className="mt-6">
        <b>🗓️03-05.03 Модуль 3: Особиста та системна травма</b>
        <p className='ml-4'>вечірня група: 18.03, 01.04</p>
        <p className='ml-4'>ранкова група: 19.03, 02.04</p>
      </div>

      <div className="mt-6">
        <b>🗓️28-30.04 Модуль 4: Розстановки хвороб та симптомів. (виїздний в Трипіллі)</b>
        <div className='text-gray-500 italic'>
          <p><span className='underline'>Вартість модуля:</span> €150</p>
          <p><span className='underline'>Проживання (за 3 дні для однієї людини):</span> 1500 (готель 2-х) / 1300 (готель 3-х) / 1200 (новий корпус 2-х) / 900 (хостел)</p>
          <p><span className='underline'>Харчування:</span> 1900</p>
        </div>
        <p className='ml-4 mt-2'>вечірня група: 13.05, 27.05</p>
        <p className='ml-4'>ранкова група: 14.05, 28.05</p>
      </div>

      <div className="mt-6">
        <b>🗓️30.06-02.07 Модуль 5: Робота з темами смерті та втрати</b>
        <p className='ml-4'>вечірня група: 15.07, 29.07</p>
        <p className='ml-4'>ранкова група: 16.07, 30.07</p>
      </div>

      <div className="mt-6">
        <b>🗓️01-08.08 Інтенсив Awareness</b>
          <div className='text-gray-500 italic'>
            <p className='underline'>Вартість участі при передплаті (€50):</p>
            <p className='ml-4'>до 1 червня — €250</p>
            <p className='ml-4'>до 1 серпня — €300</p>
            <p><span className='underline'>Проживання (за 8 днів для однієї людини):</span> 5250(готель 2-х); 4550(готель 3-х); 4200(новий корпус 2-х); 3850(будинок рибалки 2-х, 4-х); 3150(хостел)</p>
            <p><span className='underline'>Харчування:</span> 6650</p>
          </div>
        
      </div>

      <div className="mt-6">
        <b>🗓️22-24.09 Модуль 6: Чоловік і жінка — системний погляд на партнерські стосунки в парі</b>
        <p className='ml-4'>вечірня група: 07.10, 21.10</p>
        <p className='ml-4'>ранкова група: 08.10, 22.10</p>
      </div>

      <div className="mt-6">
        <b>🗓️03-05.11 Модуль 7: Бізнес розстановки, гроші та реалізація</b>
        <p className='ml-4'>вечірня група: 18.11, 02.12</p>
        <p className='ml-4'>ранкова група: 19.11, 03.12</p>
      </div>

      <div className="mt-6">
        <b>Грудень (дата уточнюється) — Модуль 8: Сертифікація</b>
      </div>
    </div>
  );
};
