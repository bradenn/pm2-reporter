let router = require('express').Router();
let pm2 = require('pm2');

router.get("/", async (req, res) => {
    pm2.list((err, list) => {
        let nodes = list.map(item => {
            return {
                name: item.name,
                id: item.pm_id,
                status: item.pm2_env.status,
                env: item.pm2_env.NODE_ENV,
                instance_id: item.pm2_env.INSTANCE_ID,
                ram: item.monit.memory,
                cpu: item.monit.cpu
            };
        });
        let system = {
            total_nodes: nodes.length
        };
        res.json({system: system, node: nodes});
    })
});


module.exports = router;