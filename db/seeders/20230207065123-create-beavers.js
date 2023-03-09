/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Beavers',
      [
        {
          name: 'Woodrow Wilson',
          img: 'https://cottagelife.com/wp-content/uploads/2016/07/Cute-baby-beavers-e1468506243629.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sigourney Beaver',
          img: 'https://pandabode.com/blog/wp-content/uploads/2019/10/Pandabode-Beaver-1920x1080.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Woody Harrelson',
          img: 'https://cottagelife.com/wp-content/uploads/2016/07/Cute-baby-beavers7-e1468506307829.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Justin Beaver',
          img: 'https://i.pinimg.com/736x/1d/c3/97/1dc3975b4a85972dda8809b6206b1755.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chuck Norris',
          img: 'https://i.pinimg.com/originals/0b/4a/17/0b4a1700b725a0e7adc839bfcfc03677.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Woody Allen',
          img: 'https://i.ebayimg.com/images/g/v98AAOSwLs5asWCg/s-l1600.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chuck Palahniuk',
          img: 'https://i.guim.co.uk/img/media/c0758f2983cbd178405aae6f1f7961e18ddab50c/0_0_1574_1140/master/1574.jpg?width=700&quality=85&auto=format&fit=max&s=2296f6eaafa2a4e4f69373234d921071', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gopher',
          img: 'https://cottagelife.com/wp-content/uploads/2016/08/Brian-LasenbyShutterstock.com_.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chuck Berry',
          img: 'https://w0.peakpx.com/wallpaper/381/719/HD-wallpaper-nice-beaver-wildlife-nice-beaver-animal.jpg', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bibarel',
          img: 'https://media.istockphoto.com/id/1353087896/photo/a-close-up-portrait-view-of-a-north-american-beaver-quebec.jpg?s=612x612&w=0&k=20&c=t6Byo0EKLh03V42LRDwgH1lt5DQ76ZWtS0CbKwKds7o=', //
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
