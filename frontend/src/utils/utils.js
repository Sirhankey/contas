function getMonthName(dateString) {
    const dateParts = dateString.split('/');
    // Os meses em JavaScript são baseados em zero (janeiro é 0)
    const month = parseInt(dateParts[1]) - 1;

    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return monthNames[month];
}

function getColorByGroup(group) {
    const colorMap = {
      'apartamento': 'red',
      'cartao': 'blue',
      'escola': 'green',
      'carro': 'yellow',
    };
  
    return colorMap[group] || 'gray';
  }


module.exports = { getMonthName , getColorByGroup}
