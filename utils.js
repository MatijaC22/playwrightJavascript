
export function date(language = 'eng'){
        const frenchShortDays = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];
      const frenchShortMonths = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
    
      function formatDate(date, useFrench) {
        const options = {
          weekday: 'short',
          day: 'numeric',
          month: useFrench ? 'short' : 'short'
        };
        return date.toLocaleDateString(useFrench ? 'fr-FR' : 'en-US', options);
      }
    
      function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
    
      // Get the current date
      const today = new Date();
    
      // Format the current date
      const formattedToday = formatDate(today, language === 'french');
    
      // Calculate dates for 4, 34, 6, and 36 days from today
      const datePlus4 = addDays(today, 4);
      const datePlus34 = addDays(today, 34);
      const datePlus6 = addDays(today, 6);
      const datePlus36 = addDays(today, 36);
    
      // Format the calculated dates
      const formattedDatePlus4 = formatDate(datePlus4, language === 'french');
      const formattedDatePlus34 = formatDate(datePlus34, language === 'french');
      const formattedDatePlus6 = formatDate(datePlus6, language === 'french');
      const formattedDatePlus36 = formatDate(datePlus36, language === 'french');
      let formattedDatePlus4csv = datePlus4.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
      let formattedDatePlus34csv = datePlus34.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
      let formattedDatePlus6csv = datePlus6.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
      let formattedDatePlus36csv = datePlus36.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
      
    return [{
        'checkIn':formattedDatePlus4,
        'checkIncsv':formattedDatePlus4csv,
        'checkOut':formattedDatePlus34,
        'checkOutcsv':formattedDatePlus34csv
        },{
        'checkIn':formattedDatePlus6,
        'checkIncsv':formattedDatePlus6csv,
        'checkOut':formattedDatePlus36,
        'checkOutcsv':formattedDatePlus36csv
    }]
    // aria-label="Wed, 3 Jul"
}